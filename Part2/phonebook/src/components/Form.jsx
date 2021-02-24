import React from "react"
import Input from "./Input"
import Button from "./Button"

const Form= ({handNameInput, handlePhoneInput, handleSubmit, valueName, valuePhone})=>{
    return (
        <>
        <form>
        <Input labelText="Name" handleFunction={handNameInput} value={valueName}></Input>
        <Input labelText="Phone" handleFunction={handlePhoneInput} value={valuePhone}></Input>
        <Button text="Add" handleFunction={handleSubmit}></Button>
      </form>
        </>
    )
}

export default Form