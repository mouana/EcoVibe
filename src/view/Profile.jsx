import React from "react";
import ProfileDisplay from "../Components/profile/ProfileDisplay";
import ProfileDelete from "../Components/profile/ProfileDelete";
import Dashboard from "../Components/profile/Dashboard"

const ProfileContainer = () => {
    return (
        <div className="uk-container uk-margin-large-top">
            <h2 className="uk-heading-line"><span>Votre Profile :</span></h2>
            <ProfileDisplay />
            <Dashboard />
            <ProfileDelete />
        </div>
    );
};

export default ProfileContainer;
