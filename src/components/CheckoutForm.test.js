import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event'

// Write up the two tests here and make sure they are testing what the title shows
    test("renders without errors", () => {
        render(<CheckoutForm />);
        const header = screen.getByText(/Checkout Form/i);
        expect(header).toBeInTheDocument();
    });


test("shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    const firstName = screen.getByLabelText(/First Name/i)
    const lastName = screen.getByLabelText(/Last Name/i)
    const address = screen.getByLabelText(/Address/i)
    const city = screen.getByLabelText(/City/i)
    const state = screen.getByLabelText(/State/i)
    const zip = screen.getByLabelText(/Zip/i)
    const submitButton = document.querySelector('button')

    userEvent.type(firstName, 'Marcie')
    userEvent.type(lastName, 'MacLean')
    userEvent.type(address, '2424 Main Street')
    userEvent.type(city, 'Townsville')
    userEvent.type(state, 'GA')
    userEvent.type(zip, '01234')
    userEvent.click(submitButton)

    const successMessage = document.querySelector("[data-testid = 'successMessage']")

    expect(successMessage).toHaveTextContent(/Marcie MacLean/)
    expect(successMessage).toHaveTextContent(/2424 Main Street/)
    expect(successMessage).toHaveTextContent(/Townsville/)
    expect(successMessage).toHaveTextContent(/GA/)
    expect(successMessage).toHaveTextContent(/01234/)
});