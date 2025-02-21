interface Props {
  name: string;
}

const Message = ({ name }: Props) => {
  return <h1>Hello {name}</h1>;
};

export default Message;
