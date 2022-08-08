import React from 'react';
import { Formik } from 'formik'
import { Button, Input, Label, Card, Container, Row, Col, CardBody } from 'reactstrap';
import { InformationPageConstants } from 'constants/content';
import { date } from 'helpers';
import { useStore } from 'store';
import { setPersonalInformation } from 'store/actions';
import { useNavigate } from 'react-router-dom';
import { RoutesConstent, SubRoutes } from 'constants/routes';

interface Props { }

const Personal: React.FC<Props> = () => {

    const { state, dispatch } = useStore();
    const navigate = useNavigate();

    return (
        <Formik
            initialValues={state.information.personal}
            validate={values => {
                const errors: any = {};
                if (!values.firstName) {
                    errors.firstName = InformationPageConstants.ERROR_REQUIRED;
                }
                if (!values.lastName) {
                    errors.lastName = InformationPageConstants.ERROR_REQUIRED;
                }
                if (!values.dob) {
                    errors.dob = InformationPageConstants.ERROR_REQUIRED;
                } else if(values.dob && new Date().getFullYear() - new Date(values.dob).getFullYear() < 18) {
                    errors.dob = InformationPageConstants.ERROR_LESS_AGE
                }
                if (!values.ssn) {
                    errors.ssn = InformationPageConstants.ERROR_REQUIRED;
                } else if (values.ssn) {
                    let newvalues = values.ssn + ""
                    let ssns = newvalues.split("");
                    let lastNumber = ssns[0];
                    if (ssns.length != 9) {
                        errors.ssn = InformationPageConstants.ERROR_SSN_DIGITS_LENGTH
                    }
                    else if(!ssns.some(value => value != lastNumber)) {
                        errors.ssn = InformationPageConstants.ERROR_SSN_SIMILAR_NUMBERS
                    }
                }
                return errors;
            }}
            onSubmit={(values) => {
                dispatch(setPersonalInformation(values))
                navigate(RoutesConstent.information + SubRoutes.employee)
            }}
        >
            {
                ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) =>
                    <Container className="information_container">
                        <Card className="information_content">
                            <CardBody>
                                <Row>
                                    <Label>
                                        {InformationPageConstants.FIRST_NAME}
                                        <Input
                                            type="text"
                                            name="firstName"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.firstName}
                                        />
                                    </Label>
                                    <Label style={{ color: 'red' }}>
                                        {errors.firstName && touched.firstName && errors.firstName}
                                    </Label>
                                </Row>
                                <Row>
                                    <Label>
                                        {InformationPageConstants.LAST_NAME}
                                        <Input
                                            type="text"
                                            name="lastName"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.lastName}
                                        />
                                    </Label>
                                    <Label style={{ color: 'red' }}>
                                        {errors.lastName && touched.lastName && errors.lastName}
                                    </Label>
                                </Row>
                                <Row>
                                    <Label>
                                        {InformationPageConstants.DOB}
                                        <Input
                                            type="date"
                                            name="dob"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.dob}
                                            min={date.toString(date.subtractYears(124))}
                                            max={date.toString(new Date())}
                                        />
                                    </Label>
                                    <Label style={{ color: 'red' }}>
                                        {errors.dob && touched.dob && errors.dob}
                                    </Label>
                                </Row>
                                <Row>
                                    <Label>
                                        {InformationPageConstants.SSN}
                                        <Input
                                            type="number"
                                            name="ssn"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.ssn}
                                        />
                                    </Label>
                                    <Label style={{ color: 'red' }}>
                                        {errors.ssn && touched.ssn && errors.ssn}
                                    </Label>
                                </Row>
                                <Row>
                                    <Col className="text-md-right" md="12">
                                        <Button onClick={() => handleSubmit()}>
                                            {InformationPageConstants.NEXT}
                                        </Button>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Container>
            }
        </Formik>
    )
}

export default Personal
