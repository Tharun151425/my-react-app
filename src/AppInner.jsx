function AppInner(props){
    const sendData = () => {
        setTimeout(() =>{
        console.log(`Inside AppInner function`);
        const currTime = new Date().toLocaleTimeString();
        props.parentCallBack(currTime);
        },5000);
        return (<div></div>)
    }
    sendData();
}

export default AppInner;