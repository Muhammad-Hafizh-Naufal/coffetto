export default function Card(props) {
  const { Image, Title, Price } = props;
  return (
    <>
      <div className="flex items-center flex-col">
        <img src={Image} alt="" />
        <p className="font-pacifico text-3xl text-white">{Title}</p>
        <p className="text-white font-pacifico text-2xl">{Price}</p>
      </div>
    </>
  );
}
