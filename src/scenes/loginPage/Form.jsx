import React from 'react';
import { useState } from "react";
import {
    Box,
    Button,
    TextField,
    useMediaQuery,
    Typography,
    useTheme
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons/EditOutlined";
import { Formik } from "formik";
import * as yup from "yup" //Validation library
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "state";
import Dropzone from "react-dropzone";
import FlexBetween from "components/FlexBetween";

const registerSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("Invalid email").required("required"),
    password: yup.string().required("required"),
    location: yup.string().required("required"),
    occupation: yup.string().required("required"),
    picture: yup.string().required("required"),
})

const loginSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("required"),
    password: yup.string().required("required"),
});

const initialValueRegister = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    location: "",
    occupation: "",
    picture: "",
}

const initialValueLogin = {
    email: "",
    password: ""
}

const Form = () => {
  const [ pageType, setPageType ] = useState("login");
  const { palette } = useTheme();
  const dispatch = useDispatch;
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";

  const handleFormSubmit = async (values, onSubmitProps) => {}

    return (
        <Formik
            onSubmit={handleFormSubmit}
            initialValues={isLogin ? initialValueLogin : initialValueRegister}
            validationSchema={isLogin ? loginSchema : registerSchema}
        >
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                setFieldValue,
                resetForm,
            })=> (
                <form onSubmit={handleFormSubmit}>
                    <Box
                        display="grid"
                        gap="30px"
                        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                        sx={{
                            "& > div": {
                                gridColumn: isNonMobile ? undefined : "span 4"
                            }
                        }}
                    >

                    </Box>
                </form>
            )}
        </Formik>
    )
}

export default Form