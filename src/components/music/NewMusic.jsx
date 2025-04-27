import { musicData } from "@/data/db";

const NewMusic = () => {
  const chunkArray = (array, chunkSize) => {
    return array.reduce((result, item, index) => {
      if (index % chunkSize === 0) result.push([]);
      result[result.length - 1].push(item);
      return result;
    }, []);
  };
  const musicRows = chunkArray(musicData, 2);
  console.log(musicRows);

  return <div></div>;
};

export default NewMusic;
