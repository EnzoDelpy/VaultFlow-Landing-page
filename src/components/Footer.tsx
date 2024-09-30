import logo from "../assets/images/valtflow_icon.png";

function Footer(){
    return <footer className="flex justify-center px-5 py-16 text-[#FFFFFF] w-full">
        <div className="flex max-w-[75rem] gap-6 grow p-6 max-md:flex-col">
            <div className="flex flex-col gap-10 flex-1">
                <div className="flex flex-col gap-4">
                    <h3 className="font-medium text-2xl">Contact</h3>
                    <div className="flex flex-col gap-[0.375rem] text-lg font-light">
                        <p>Work inquires: work@vaultflow.com</p>
                        <p>PR and speaking: press@vaultflow.com</p>
                        <p>New business: newbusiness@vaultflow.com</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="font-medium text-2xl">Careers</h3>
                    <p className="text-lg font-light">Careers@vaultflow.com</p>
                </div>
                <p className="font-light text-[#939393]">© 2023 Vaultflow. All Rights Reserved.</p>
            </div>
            <div className="flex flex-col gap-10 flex-1">
                <div className="flex flex-col gap-4">
                    <h3 className="font-medium text-2xl">Address</h3>
                    <p className="text-lg font-light">398 11th Street, Floor 2 <br />San Francisco, CA 94103</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="font-medium text-2xl">Social</h3>
                    <div className="flex flex-col gap-[0.375rem] text-lg font-light">
                        <a className="hover:font-bold">Twitter</a>
                        <a className="hover:font-bold">Instagram</a>
                        <a className="hover:font-bold">Tik Tok</a>
                    </div>
                </div>
            </div>
            <div className="md:max-w-[11.25rem] flex-1 flex justify-end items-end">
                <div className="flex items-center gap-[0.625rem]">
                    <img src={logo} alt="VaultFlow logo" className="w-[1.375rem] h-[1.375rem]"/>
                    <span className="text-[1.375rem] font-bold">VaultFlow</span>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer