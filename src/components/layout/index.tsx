import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,} from 'reactstrap';
import { RoutesConstent } from 'constants/routes';
import { useStore } from 'store';
import { ReactComponent as Logo } from 'assert/Freddys_Logo.svg'

export interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    const { state, dispatch } = useStore();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <Navbar style={{
                height: "4vh",
                width: "100%",
                position: "fixed",
                zIndex: "999",
                backgroundColor: "#1f2e78"
            }}
                expand="md"
            >
            </Navbar>
            <div style={{
                display: "flex",
                flexDirection: "column"
            }}>
                <Navbar style={{ 
                    width: "250px",
                    marginTop: "4vh", 
                    height: "94vh", 
                    alignItems: "baseline", 
                    position: "fixed",
                    borderRight: "1px solid #d1d1d1"
                }} 
                    light 
                    expand="md"
                >
                    <Nav style={{ flexDirection: "column" }} navbar>
                    </Nav>
                </Navbar>
                <div style={{ 
                    marginTop: "10vh", 
                    marginLeft: "250px", 
                    overflow: "auto",
                }}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout;
