// PascalCasing
function Message() {
    const name = 'John';
    if (name)
        return <h2>Hello {name}</h2>;
    return <h2>Hello World!</h2>;
}

export default Message;