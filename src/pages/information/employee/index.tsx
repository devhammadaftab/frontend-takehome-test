import React, { useEffect, useState } from 'react';
import { Formik } from 'formik'
import { Button, Input, Label, Card, Container, Row, Col, CardBody } from 'reactstrap';
import { InformationPageConstants, LoanConstants } from 'constants/content';
import { useStore } from 'store';
import { setEmployeeInformation } from 'store/actions';
import { useNavigate } from 'react-router-dom';
import { RoutesConstent, SubRoutes } from 'constants/routes';
import { WorkStatus } from 'constants/store';
import Modal, { ModalType } from 'components/modal';

interface Props { }

const Employee: React.FC<Props> = () => {

    const { state, dispatch } = useStore();
    const [messageModal, setMessageModal] = useState<ModalType>({
        show: false,
        description: ''
    })
    const [smallLoan, setSmallLoan] = useState<ModalType>({
        show: false,
        title: LoanConstants.SMALL_TITLE,
        description: LoanConstants.SMALL_APPROVED_DESCRIPTION,
    });
    const [largeOffer, setLargeOffer] = useState<ModalType>({
        show: false,
        title: LoanConstants.LARGE_TITLE,
        description: LoanConstants.LARGE_APPROVED_DESCRIPTION,
    });
    const navigate = useNavigate();

    useEffect(() => {
        if(!state.information.personal.firstName) {
            navigate(RoutesConstent.information + SubRoutes.personal)
        }
    },[])

    const toggleMessageModal = (description?: string) => {
        setMessageModal({
            ...messageModal,
            show: !messageModal.show,
            description: description
        })
    }

    const toggleSmall = () => {
        setSmallLoan({
            ...smallLoan,
            show: !smallLoan.show
        })
    }

    const toggleLarge = () => {
        setLargeOffer({
            ...largeOffer,
            show: !largeOffer.show
        })
    }

    return (
        <>
            <Modal {...messageModal} toggle={() => {
                setMessageModal({
                    ...messageModal,
                    show: !messageModal.show
                })
            }} />
            <Modal {...smallLoan} toggle={toggleSmall} actions={[{
                label: LoanConstants.ACCEPT,
                callbackParam: LoanConstants.SMALL_ACCEPT_MESSAGE,
                callback: toggleMessageModal
            }, {
                label: LoanConstants.DECLINE,
                callbackParam: LoanConstants.SORRY_TO_HEAR,
                callback: toggleMessageModal
            }, {
                label: LoanConstants.BACK,
                callback: toggleSmall
            }]} />
            <Modal {...largeOffer} toggle={toggleLarge} actions={[{
                label: LoanConstants.ACCEPT,
                callbackParam: LoanConstants.LARGE_ACCEPT_MESSAGE,
                callback: toggleMessageModal
            }, {
                label: LoanConstants.DECLINE,
                callbackParam: LoanConstants.SORRY_TO_HEAR,
                callback: toggleMessageModal
            }, {
                label: LoanConstants.BACK,
                callback: toggleLarge
            }]} />
            <Formik
                initialValues={state.information.employee}
                validate={values => {
                    const errors: any = {};
                    if (!values.name) {
                        errors.name = InformationPageConstants.ERROR_REQUIRED;
                    }
                    if (!values.grossSalary) {
                        errors.grossSalary = InformationPageConstants.ERROR_REQUIRED;
                    } else if (values.grossSalary <= 1000) {
                        errors.grossSalary = InformationPageConstants.ERROR_GROSS_SALARY;
                    }
                    return errors;
                }}
                onSubmit={(values) => {
                    dispatch(setEmployeeInformation(values))
                    if (values.grossSalary < 15000) {
                        toggleSmall()
                    }
                    else {
                        toggleLarge()
                    }
                }}
            >
                {
                    ({ values, errors, touched, handleChange, handleBlur, handleSubmit }) =>
                        <Container className="information_container">
                            <Card className="information_content">
                                <CardBody>
                                    <Row>
                                        <Label>
                                            {InformationPageConstants.EMPLOYER_NAME}
                                            <Input
                                                type="text"
                                                name="name"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.name}
                                            />
                                        </Label>
                                        <Label style={{ color: 'red' }}>
                                            {errors.name && touched.name && errors.name}
                                        </Label>
                                    </Row>
                                    <Row>
                                        <Label>
                                            {InformationPageConstants.GROSS_SALARY}
                                            <Input
                                                type="number"
                                                name="grossSalary"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.grossSalary}
                                            />
                                        </Label>
                                        <Label style={{ color: 'red' }}>
                                            {errors.grossSalary && touched.grossSalary && errors.grossSalary}
                                        </Label>
                                    </Row>
                                    <Row>
                                        <Label>
                                            {InformationPageConstants.WORK_STATUS}
                                            <Input
                                                type="select"
                                                name="workStatus"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.workStatus}
                                            >
                                                <option value={''}>{InformationPageConstants.SELECT}</option>
                                                {Object.keys(WorkStatus).map((key: any, index) => {
                                                    // @ts-ignore
                                                    return <option key={index} value={WorkStatus[key]}>{WorkStatus[key]}</option>
                                                }
                                                )}
                                            </Input>
                                        </Label>
                                        <Label style={{ color: 'red' }}>
                                            {errors.workStatus && touched.workStatus && errors.workStatus}
                                        </Label>
                                    </Row>
                                    <Row>
                                        <Col className="text-md-left" md="6">
                                            <Button onClick={() => navigate(RoutesConstent.information + SubRoutes.personal)}>
                                                {InformationPageConstants.BACK}
                                            </Button>
                                        </Col>
                                        <Col className="text-md-right" md="6">
                                            <Button onClick={() => handleSubmit()}>
                                                {InformationPageConstants.SUBMIT}
                                            </Button>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Container>
                }
            </Formik>
        </>
    )
}

export default Employee
