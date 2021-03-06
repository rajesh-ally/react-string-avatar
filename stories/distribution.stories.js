import React from 'react';

export default {
    title: 'Avatar Distribution'
};

// import Avatar from './../dist/react-string-avatar.js';
// import Avatar from './../src/react-string-avatar.js';
import Avatar from 'react-string-avatar'; // Distribution route

export const myAvatarDistribution = () => (
    <div>
        <div>
            <img src="https://raw.githubusercontent.com/ajsoriar/react-string-avatar/master/demo/react-string-avatar-examples.png" />
        </div>
        <Avatar initials="A" />
        <Avatar initials="AS" bgColor="#00FF00" />
        <Avatar initials="AJS" bgColor="cyan" textColor="blue" roundShape="true"  />
        <Avatar initials="AJ" bgColor="red" textColor="yellow" pictureResolution={512} width={64} />
        <Avatar initials="AJ" bgColor="yellow" textColor="green" pictureResolution={1024} width={32} />
        <Avatar initials="AS" bgColor="lightgreen" textColor="red" pictureResolution={16} width={128} pixelated={false} />
        <Avatar initials="AS" bgColor="#99f499" textColor="red" pictureResolution={16} width={128} pixelated />
        <Avatar initials="AS" roundShape bgColor="#a8ff2c" textColor="black" pictureResolution={512} width={42} pixelated={false} class="adres-css" wrapperStyle={{ border: '4px solid red' }} wrapper />
        <Avatar initials="123" roundShape string="  andres     jose   soria " bgColor="orange" textColor="#FFF" pictureResolution={256} width={64} pixelated={false} class="adres-css" wrapperStyle={{ border: '4px solid red' }} />
        <Avatar roundShape bgColor="#36adf2" textColor="white" pictureResolution={256} width={56} pixelated={false} class="adres-css" wrapperStyle={{ border: '2px solid blue' }} />
        <Avatar initials="CM" cornerRadius={7} bgColor="#3875d7" />
        <Avatar initials="jpg" pictureFormat="jpeg" bgColor="red" textColor="yellow" width={64} cornerRadius={5} />
        <Avatar initials="png" pictureFormat="png" bgColor="purple" textColor="yellow" width={64} cornerRadius={5} />
    </div>
);

myAvatarDistribution.story = {
    name: 'dist folder'
};
