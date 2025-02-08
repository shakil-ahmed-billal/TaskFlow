
import {
    Button,
    DarkThemeToggle,
    Dropdown,
    DropdownDivider,
    DropdownHeader,
    DropdownItem,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
} from "flowbite-react";
import { Link, NavLink } from "react-router-dom";



const Header = () => {

    const user = null

    return (
        <div>
            <Navbar className="fixed top-0 w-full z-50 dark:bg-dark2 text-text1" fluid >
                <Link to={'/'}>
                    <NavbarBrand href="">
                        <img src={"/logo.png"} className="mr-2 md:ml-12 h-10 sm:h-9 lg:h-12" alt="" />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">CareSync</span>
                    </NavbarBrand></Link>
                <div className="flex md:order-2 md:mr-12 md:gap-5 gap-2">
                    <DarkThemeToggle className="rounded-full" />
                    {!user ? <Link to={'/auth/login'}><Button>Join Us</Button></Link> : <Dropdown
                        arrowIcon={false}
                        inline
                        label={<img referrerPolicy="no-referrer" className="w-10 h-10 rounded-full object-cover" src={user?.photoURL}></img>}>
                        <DropdownHeader>
                            <span className="block text-sm">{user?.displayName}</span>
                            <span className="block truncate text-sm font-medium">{user?.email}</span>
                        </DropdownHeader>

                        <DropdownItem >Dashboard</DropdownItem>
                        <DropdownItem >Profile</DropdownItem>
                        <DropdownDivider />
                        <DropdownItem >Sign out</DropdownItem>
                    </Dropdown>}
                    <NavbarToggle />
                </div>
                <NavbarCollapse>
                    <NavbarLink ><NavLink to={'/'}>Home</NavLink></NavbarLink>
                    <NavbarLink ><NavLink to={'/all-Task'}>All Task</NavLink></NavbarLink>
                </NavbarCollapse>
            </Navbar>
        </div>
    )
}

export default Header
