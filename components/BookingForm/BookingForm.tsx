import { useInput } from "hooks/useInput";
import { useSelect } from "hooks/useSelect";
import { MutableRefObject, useRef, useState } from "react";
import styled from "styled-components";
import { Button } from "../Base";
import { SectionHeading } from "../Base/SectionHeading";

const now = new Date();
const thisYear = now.getFullYear();

const FormWrapper = styled.div`
  margin-left: var(--margin-xl);
  margin-right: var(--margin-xl);
  position: relative;
`;

const Form = styled.form`
  padding: var(--padding-md);
  background-color: var(--light-grey);
  border-radius: var(--border-radius-xl);
  max-width: 800px;
  margin: auto;
`;

const FormInputWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: calc(50% - calc(var(--margin-md) * 2));
  flex-grow: 1;
  margin: var(--margin-md);
  justify-content: flex-end;
  min-width: 150px;
  flex-basis: 200px;
`;

const FormLabel = styled.label`
  margin-left: 8px;
`;

const FormInputRow = styled.div`
  display: flex;
  align-items: fex-end;
  flex-wrap: wrap;
  line-height: 2.5;
  letter-spacing: 0.7px;
`;
const FormInput = styled.input`
  font-size: 16px;
  padding: var(--padding-sm);
  line-height: 1.5;
  box-sizing: border-box;
  display: inline-block;
  border-width: 1px;
  border-radius: var(--border-radius-md);
  border-color: rgba(0, 0, 0, 0.2);
  background-color: #fff;

  &[data-valid="false"] {
    outline: var(--red) auto 1px;
    + [data-error] {
      opacity: 1;
      max-height: 18px;
    }
  }
  &[data-valid="true"] {
    outline: var(--green) auto 1px;
  }
`;
const FormSelect = styled.select`
  font-size: 16px;
  padding: var(--padding-sm);
  line-height: 1.5;
  box-sizing: border-box;
  display: inline-block;
  border-width: 1px;
  border-radius: var(--border-radius-md);
  border-color: rgba(0, 0, 0, 0.2);
  appearance: none;
  background-color: #fff;
  max-width: 100%;

  &:focus-visible {
    outline: -webkit-focus-ring-color auto 1px;
  }
  &[data-valid="false"] {
    outline: var(--red) auto 1px;
    + [data-error] {
      opacity: 1;
      max-height: 18px;
    }
  }
  &[data-valid="true"] {
    outline: var(--green) auto 1px;
  }
`;

const FormHeading = styled(SectionHeading)`
  margin-top: 0;
  margin: var(--margin-lg);
`;

const Underlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  content: "";
  background-color: rgba(255, 255, 255, 0.9);

  &[aria-hidden="false"] {
    opacity: 1;
    visibility: visible;
    z-index: 2;
    transition: visibility 0s 0s, z-index 0s 0s, opacity 0.3s ease;
  }

  &[aria-hidden="true"] {
    opacity: 0;
    visibility: hidden;
    z-index: -1;
    transition: visibility 0s 0.3s, z-index 0s 0.3s, opacity 0.3s ease;
  }
`;
const Loader = styled.span`
  content: "";
  position: absolute;
  top: calc(50% - 37.5px);
  left: calc(50% - 37.5px);
  width: 75px;
  height: 75px;
  border: 8px solid var(--blue);
  border-bottom-color: var(--green);
  border-radius: 50%;

  &[aria-hidden="false"] {
    opacity: 1;
    visibility: visible;
    z-index: 2;
    transition: visibility 0s 0s, z-index 0s 0s, opacity 0.3s ease;
    animation: spin 1s linear infinite;
  }

  &[aria-hidden="true"] {
    opacity: 0;
    visibility: hidden;
    z-index: -1;
    transition: visibility 0s 0.3s, z-index 0s 0.3s, opacity 0.3s ease;
  }
`;

const Response = styled.aside`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--light);
  border-radius: var(--border-radius-xl);
  position: absolute;
  padding: var(--padding-lg);
  text-align: center;
  width: 90%;
  max-width: 500px;

  p {
    margin: var(--margin-md) 0;
    &:last-of-type {
      margin-bottom: var(--margin-md);
    }
  }

  span {
    font-size: 1.5rem;
    font-weight: bold;
  }

  &[data-type="error"] span:nth-child(2) {
    display: none;
  }

  &[data-type="success"] span:first-child {
    display: none;
  }

  &[aria-hidden="false"] {
    opacity: 1;
    visibility: visible;
    z-index: 2;
    transition: visibility 0s 0s, z-index 0s 0s, opacity 0.3s ease,
      transform 0.3s ease;
    transform: translate(-50%, -50%);
  }

  &[aria-hidden="true"] {
    transform: translate(-50%, -100vh);
    opacity: 0;
    visibility: hidden;
    z-index: -1;
    transition: visibility 0s 0.3s, z-index 0s 0.3s, opacity 0.3s ease,
      transform 0.3s ease;
  }
`;

const ValidationError = styled.div`
  font-size: 8px;
  background: var(--red);
  color: var(--light);
  display: inline-block;
  align-self: center;
  padding: 2px 4px;
  position: absolute;
  border-radius: var(--border-radius-sm) var(--border-radius-sm) 0 0;
  opacity: 0;
  max-height: 0px;
  transition: 0.3s ease;
`;

const CloseModal = styled(Button)`
  padding: calc(var(--padding-sm) * 0.75) var(--padding-sm);
  background-color: var(--blue);
  min-width: 100px;
`;

const Toggle = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: var(--margin-md);

  input {
    height: 0;
    top: 0;
    left: 0;
    width: 0;
    position: absolute;
  }

  input:checked + span {
    background-color: var(--blue);

    &::before {
      transform: translateX(100%);
    }
  }
  input:checked ~ span:last-of-type {
    opacity: 1;
    &::before {
      transform: translateX(100%);
    }
  }

  span:first-of-type {
    width: 44px;
    height: 24px;
    position: relative;
    border-radius: 24px;
    background-color: var(--grey);
    transition: 0.3s ease;
    content: "";
    display: block;
    cursor: pointer;

    &::before {
      border-radius: 50%;
      transition: 0.3s ease;
      width: 20px;
      height: 20px;
      top: 2px;
      left: 2px;
      transform: translateX(0);
      background-color: #fff;
      content: "";
      position: absolute;
    }
  }

  span:last-of-type {
    transition: 0.3s ease;
    margin-left: 12px;
    opacity: 0.4;
    font-weight: bold;
  }
`;

const CustomDateRow = styled.div`
  display: flex;
  input {
    flex-grow: 0.5;
    border-radius: var(--border-radius-lg) 0 0 var(--border-radius-lg);
  }
  select:first-of-type {
    flex-grow: 1;
    border-radius: 0;
  }
  select:last-of-type {
    flex-grow: 0.5;
    border-radius: 0 var(--border-radius-lg) var(--border-radius-lg) 0;
  }
`;

interface BookingFormProps {
  bookingTitle: string;
  copy?: string[];
  groupSize: {
    min: number;
    max: number;
    measurement: "people" | "couples";
  };
  dates: [string, string][];
}

const BookingForm: React.FC<BookingFormProps> = ({
  bookingTitle,
  groupSize,
  dates,
  copy,
}) => {
  const dateStringOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const filteredDates = dates.filter(
    (date) => new Date() < new Date(date[0].replace(/-/g, "/"))
  );

  const {
    value: name,
    handleInput: handleNameInput,
    handleBlur: handleNameBlur,
    isValid: nameIsValid,
  } = useInput<string>("alpha", "");
  const {
    value: email,
    handleInput: handleEmailInput,
    handleBlur: handleEmailBlur,
    isValid: emailIsValid,
  } = useInput<string>("email", "");
  const {
    value: phone,
    handleInput: handlePhoneInput,
    handleBlur: handlePhoneBlur,
    isValid: phoneIsValid,
  } = useInput<string>("number", "", 9);
  const {
    value: group,
    handleInput: handleGroupInput,
    handleBlur: handleGroupBlur,
    isValid: groupIsValid,
  } = useInput<string>("number", "");
  const {
    value: customDay,
    handleInput: handleCustomDayInput,
    handleBlur: handleCustomDayBlur,
    isValid: customDayIsValid,
  } = useInput<string>("number", "");
  const {
    value: customLength,
    handleInput: handleCustomLengthInput,
    handleBlur: handleCustomLengthBlur,
    isValid: customLengthIsValid,
  } = useInput<string>("number", "");
  const {
    value: fitness,
    handleChange: handleFitnessChange,
    handleBlur: handleFitnessBlur,
    isValid: fitnessIsValid,
    isDirty: fitnessIsDirty,
  } = useSelect("default");
  const {
    value: customMonth,
    handleChange: handleCustomMonthChange,
    handleBlur: handleCustomMonthBlur,
    isValid: customMonthIsValid,
    isDirty: customMonthIsDirty,
  } = useSelect("default");
  const {
    value: date,
    handleChange: handleDateChange,
    handleBlur: handleDateBlur,
    isValid: dateIsValid,
    isDirty: dateIsDirty,
  } = useSelect("default");
  const {
    value: customYear,
    handleChange: handleCustomYearChange,
    handleBlur: handleCustomYearBlur,
    isValid: customYearIsValid,
    isDirty: customYearIsDirty,
  } = useSelect("default");

  const [isToggled, setIsToggled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const messageRef = useRef() as MutableRefObject<HTMLDivElement>;

  const handleErrors = (errors: any[]) => {
    errors.forEach((error) => {
      if (error.field === "name") {
        handleNameBlur();
      }
      if (error.field === "email") {
        handleEmailBlur();
      }
      if (error.field === "phone") {
        handlePhoneBlur();
      }
      if (error.field === "group") {
        handleGroupBlur();
      }
      if (error.field === "fitness") {
        handleFitnessBlur();
      }
      if (error.field === "date" && !isToggled) {
        handleDateBlur();
      }
      if (error.field === "date" && isToggled) {
        handleCustomDayBlur();
        handleCustomMonthBlur();
        handleCustomYearBlur();
      }
    });
  };

  const submit = async (event: any) => {
    try {
      event.preventDefault();
      const validDate =
        (isToggled &&
          customDayIsValid &&
          customLengthIsValid &&
          customMonthIsValid &&
          customYearIsValid) ||
        dateIsValid;
      // ensure valid before request
      if (
        [
          nameIsValid,
          phoneIsValid,
          emailIsValid,
          groupIsValid,
          validDate,
          fitnessIsValid,
        ].includes(false)
      )
        return;
      // We're valid
      const customDate = isToggled
        ? new Date(
            `${Number(customMonth) + 1}-${customDay}-${customYear}`
          ).toLocaleDateString("en-GB", dateStringOptions)
        : null;
      const presetDateSplit = date?.split("-");
      const presetStartDate = presetDateSplit
        ? new Date(presetDateSplit[0]).toLocaleDateString(
            "en-GB",
            dateStringOptions
          )
        : null;

      setIsLoading(true);
      const body = JSON.stringify({
        name,
        email,
        phone,
        fitness,
        group,
        date: isToggled ? customDate : presetStartDate,
        journey: bookingTitle,
        isCustom: isToggled,
        days: customLength,
      });
      const req = await fetch("/api/v1/book-journey", {
        method: "POST",
        body,
      });
      const res = await req.json();
      if (res.success) {
        messageRef.current.dataset.type = "success";
        setMessage("Your booking has been received and we will respond ASAP.");
      } else {
        messageRef.current.dataset.type = "error";
        handleErrors(res.errors);
        setMessage(res.message);
      }
      setIsLoading(false);
    } catch (e) {
      setMessage(
        "Sorry, we seem to be having an issue at the moment. Please refresh the page and try again."
      );
    }
  };

  const closeModal = () => {
    setMessage("");
    delete messageRef.current.dataset.type;
  };

  return (
    <FormWrapper>
      <Underlay aria-hidden={!isLoading && message.length === 0} />
      <Loader aria-hidden={!isLoading} />
      <Response ref={messageRef} aria-hidden={message.length === 0}>
        <span>Error 😞</span>
        <span>Success 🥳</span>
        <p>{message}</p>
        <CloseModal onClick={closeModal}>Close</CloseModal>
      </Response>
      <Form onSubmit={submit}>
        <FormHeading title={`Book ${bookingTitle}`} copy={copy} />
        <FormInputRow>
          <FormInputWrapper>
            <FormLabel>Name</FormLabel>
            <FormInput
              name="name"
              data-valid={nameIsValid}
              value={name}
              type="text"
              onChange={handleNameInput}
              onBlur={handleNameBlur}
            />
            <ValidationError data-error>
              Letters and spaces only
            </ValidationError>
          </FormInputWrapper>
          <FormInputWrapper>
            <FormLabel>Email</FormLabel>
            <FormInput
              name="email"
              value={email}
              onChange={handleEmailInput}
              data-valid={emailIsValid}
              inputMode="email"
              type="email"
              onBlur={handleEmailBlur}
            />
            <ValidationError data-error>
              Example: name@gmail.com
            </ValidationError>
          </FormInputWrapper>
        </FormInputRow>
        <FormInputRow>
          <FormInputWrapper>
            <FormLabel>Phone Number</FormLabel>
            <FormInput
              name="phone"
              type="number"
              inputMode="tel"
              minLength={9}
              value={phone}
              onChange={handlePhoneInput}
              onBlur={handlePhoneBlur}
              data-valid={phoneIsValid}
            />
            <ValidationError data-error>
              Numbers only, minimum 9 digits
            </ValidationError>
          </FormInputWrapper>
          <FormInputWrapper>
            <FormLabel>Activity Level</FormLabel>
            <FormSelect
              name="fitness"
              value={fitness}
              onChange={handleFitnessChange}
              onBlur={handleFitnessBlur}
              data-valid={!fitnessIsDirty ? undefined : fitnessIsValid}
            >
              <option value="default">Select level</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="very-high">Very High</option>
            </FormSelect>
            <ValidationError data-error>Please select a level</ValidationError>
          </FormInputWrapper>
        </FormInputRow>
        <FormInputRow>
          <FormInputWrapper>
            <FormLabel>{`Group Size (${groupSize.measurement})`}</FormLabel>
            <FormInput
              name="group"
              value={group}
              type="number"
              min={1}
              max={groupSize.max}
              onChange={handleGroupInput}
              onBlur={handleGroupBlur}
              data-valid={groupIsValid}
              inputMode="numeric"
            />
            <ValidationError data-error>Numbers only</ValidationError>
          </FormInputWrapper>
          <FormInputWrapper>
            <FormLabel>Tour Date</FormLabel>
            <FormSelect
              name="date"
              value={date}
              onChange={handleDateChange}
              onBlur={handleDateBlur}
              data-valid={!dateIsDirty ? undefined : dateIsValid}
            >
              <option value="default">Select date</option>
              {filteredDates.map((_date) => (
                <option
                  key={Math.random().toString(36).substring(2, 9)}
                  value={`${_date[0]}-${_date[1]}`}
                >
                  {`${new Date(_date[0]).toLocaleDateString(
                    "en-GB",
                    dateStringOptions
                  )} - ${new Date(_date[1]).toLocaleDateString(
                    "en-GB",
                    dateStringOptions
                  )}`}
                </option>
              ))}
            </FormSelect>
            <ValidationError data-error>Please select a date</ValidationError>
          </FormInputWrapper>
        </FormInputRow>
        <FormInputRow>
          <FormInputWrapper style={{ alignSelf: "flex-start" }}>
            <Toggle htmlFor="check">
              <input
                defaultChecked={isToggled}
                id="check"
                type="checkbox"
                name="check"
                onChange={() => setIsToggled(!isToggled)}
              />
              <span />
              <span>Select custom date</span>
            </Toggle>
            <CustomDateRow
              style={{
                transition: "0.3s ease",
                flexDirection: "column",
                width: "100%",
                opacity: isToggled ? 1 : 0.3,
                pointerEvents: !isToggled ? "none" : "unset",
              }}
            >
              <FormLabel>Number of days</FormLabel>
              <FormInput
                style={{
                  width: "100%",
                  borderRadius: "var(--border-radius-lg",
                }}
                name="custom-length"
                value={customLength}
                type="number"
                min={1}
                max={14}
                onChange={handleCustomLengthInput}
                onBlur={handleCustomLengthBlur}
                data-valid={customLengthIsValid}
                inputMode="numeric"
              />
            </CustomDateRow>
          </FormInputWrapper>
          <FormInputWrapper
            style={{
              transition: "0.3s ease",
              opacity: isToggled ? 1 : 0.3,
              pointerEvents: !isToggled ? "none" : "unset",
            }}
          >
            <FormLabel>Starting date</FormLabel>
            <CustomDateRow>
              <FormInput
                name="custom-day"
                value={customDay}
                type="number"
                min={1}
                max={31}
                onChange={handleCustomDayInput}
                onBlur={handleCustomDayBlur}
                data-valid={customDayIsValid}
                inputMode="numeric"
                placeholder="Day"
              />
              <FormSelect
                name="custom-month"
                value={customMonth}
                onChange={handleCustomMonthChange}
                onBlur={handleCustomMonthBlur}
                data-valid={
                  !customMonthIsDirty ? undefined : customMonthIsValid
                }
              >
                <option value="default">Month</option>
                {Array(12)
                  .fill(undefined)
                  .map((u, i) => {
                    const timestamp = new Date().setMonth(i);
                    const month = new Date(timestamp).toLocaleString("en-GB", {
                      month: "short",
                    });

                    return (
                      <option
                        key={Math.random().toString(36).substring(2, 9)}
                        value={i}
                      >
                        {month}
                      </option>
                    );
                  })}
              </FormSelect>
              <FormSelect
                name="custom-year"
                value={customYear}
                onChange={handleCustomYearChange}
                onBlur={handleCustomYearBlur}
                data-valid={!customYearIsDirty ? undefined : customYearIsValid}
              >
                <option value="default">Year</option>
                <option
                  key={Math.random().toString(36).substring(2, 9)}
                  value={new Date().getFullYear()}
                >
                  {thisYear}
                </option>
                <option
                  key={Math.random().toString(36).substring(2, 9)}
                  value={new Date().getFullYear() + 1}
                >
                  {thisYear + 1}
                </option>
              </FormSelect>
            </CustomDateRow>
          </FormInputWrapper>
        </FormInputRow>
        <Button color="blue">Enquire Now</Button>
      </Form>
    </FormWrapper>
  );
};

export { BookingForm };
