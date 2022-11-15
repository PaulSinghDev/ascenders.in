import { useInput } from "hooks/useInput";
import { useSelect } from "hooks/useSelect";
import { MutableRefObject, useRef, useState } from "react";
import styled from "styled-components";
import { Button } from "../Base";
import { SectionHeading } from "../Base/SectionHeading";

const FormWrapper = styled.div`
  margin-left: var(--margin-xl);
  margin-right: var(--margin-xl);
  position: relative;
`;

const Form = styled.form`
  padding: var(--margin-xl);
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
`;

const FormLabel = styled.label``;

const FormInputRow = styled.div`
  display: flex;
  align-items: fex-end;
  flex-wrap: wrap;
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
    month: "long",
    day: "numeric",
  };
  const filteredDates = dates
    .filter((date) => new Date() < new Date(date[0]))
    .map(
      (date) =>
        `${new Date(date[0]).toLocaleDateString(
          "en-GB",
          dateStringOptions
        )} - ${new Date(date[1]).toLocaleDateString(
          "en-GB",
          dateStringOptions
        )}`
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
  } = useInput<string>("number", "");
  const {
    value: group,
    handleInput: handleGroupInput,
    handleBlur: handleGroupBlur,
    isValid: groupIsValid,
  } = useInput<string>("number", "");
  const {
    value: fitness,
    handleChange: handleFitnessChange,
    handleBlur: handleFitnessBlur,
    isValid: fitnessIsValid,
    isDirty: fitnessIsDirty,
  } = useSelect("default");
  const {
    value: date,
    handleChange: handleDateChange,
    handleBlur: handleDateBlur,
    isValid: dateIsValid,
    isDirty: dateIsDirty,
  } = useSelect("default");

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
      if (error.field === "date") {
        handleDateBlur();
      }
    });
  };

  const submit = async (event: any) => {
    try {
      event.preventDefault();
      // ensure valid before request
      if (
        [
          nameIsValid,
          phoneIsValid,
          emailIsValid,
          groupIsValid,
          dateIsValid,
          fitnessIsValid,
        ].includes(false)
      )
        return;

      setIsLoading(true);
      const body = JSON.stringify({
        name,
        email,
        phone,
        fitness,
        group,
        date,
        journey: bookingTitle,
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
      console.error(e);
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
              value={phone}
              onChange={handlePhoneInput}
              onBlur={handlePhoneBlur}
              data-valid={phoneIsValid}
            />
            <ValidationError data-error>Numbers only</ValidationError>
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
                  value={_date}
                >
                  {_date}
                </option>
              ))}
            </FormSelect>
            <ValidationError data-error>Please select a date</ValidationError>
          </FormInputWrapper>
        </FormInputRow>
        <Button color="blue">Enquire Now</Button>
      </Form>
    </FormWrapper>
  );
};

export { BookingForm };
