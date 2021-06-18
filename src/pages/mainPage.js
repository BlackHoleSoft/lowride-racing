const { default: UserMenu } = require("../components/userMenu/userMenu");

const MainPage = () => (
    <div className="main-page">
        <div className="menu">
            <UserMenu />
        </div>
        <div className="race">
            Race...
        </div>
    </div>
);
export default MainPage;