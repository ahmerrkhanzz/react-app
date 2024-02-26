// PascalCasing
function Message() {
    const name = 'Max';
    if (name)
        return <h2 className=" text-blue-400">Hello {name}</h2>;
    return <h2>Hello World!</h2>;
}

export default Message;