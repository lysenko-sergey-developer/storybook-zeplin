import React from "react";
import Button from "./Button";

export default {
    title: "@Example|Button",
};

export const ButtonNormal = () => <Button>Button</Button>;
export const ButtonPressed = () => <Button active>Button</Button>;
export const ButtonDisabled = () => <Button disabled>Button</Button>;
export const ButtonMultiple = () => (
    <>
        <ButtonNormal />
        <br />
        <br />
        <ButtonPressed />
        <br />
        <br />
        <ButtonDisabled />
    </>
);

ButtonNormal.story = {
    parameters: {
        zeplinLink:
            "zpl://components?pid=5ecff3a2d8a8ab2a61937a66&coids=6050f561b398fd6ec62563ff",
    },
};

ButtonPressed.story = {
    parameters: {
        zeplinLink:
            "zpl://components?pid=5ecff3a2d8a8ab2a61937a66&coids=6050f561afc34742f62d40b9",
    },
};

ButtonDisabled.story = {
    parameters: {
        zeplinLink:
            "zpl://components?pid=5ecff3a2d8a8ab2a61937a66&coids=6050f5610d8b6e6cd0c1f8b2",
    },
};

ButtonMultiple.story = {
    parameters: {
        zeplinLink: [
            {
                name: "Default",
                link: ButtonNormal.story.parameters.zeplinLink,
            },
            {
                name: "Pressed",
                link: ButtonPressed.story.parameters.zeplinLink,
            },
            {
                name: "Pressed",
                link: ButtonDisabled.story.parameters.zeplinLink,
            },
        ],
    },
};
