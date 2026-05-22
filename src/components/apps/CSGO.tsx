export default function CSGO() {
  const url = "https://www.onlinegames.io/games/2022/unity2/masked-special-forces/index.html";
  return (
    <iframe
      className="size-full bg-black"
      src={url}
      title="CS:GO"
      style={{ minWidth: "320px", minHeight: "480px" }}
    />
  );
}