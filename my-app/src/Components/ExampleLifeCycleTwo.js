import {useEffect, useState} from 'react';

function ExampleLifeCycleTwo() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    // With empty list, will run only on the mount.
    useEffect(() => {
        console.log("Component Mounted!");
        const handleWindowResize = () => {
            setWindowHeight(window.innerHeight);
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleWindowResize);
        // Return will run before the unmount.
        // In here, we clean up our event listener because it is outside the scope of this component and therefore will not be removed by unmounting.
        // If we do not, and the component is re-mounted, we get two event listeners bound to the window which may cause undesired effects.
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    },[]);


    return (
        <div id="exampleLifeCycleWindow" className="exampleComponent">
            <p>Current Window Size: {windowWidth}x{windowHeight}px</p>            
        </div>
    );
}

export default ExampleLifeCycleTwo;
