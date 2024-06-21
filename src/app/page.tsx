

export const dynamic = 'force-dynamic'
const images = [
  "https://images.pexels.com/photos/18374429/pexels-photo-18374429/free-photo-of-antique-lamp-against-hill-behind-building.jpeg",
  "https://images.pexels.com/photos/15818869/pexels-photo-15818869/free-photo-of-person-riding-extremely-packed-bike.jpeg",
  "https://images.pexels.com/photos/21050507/pexels-photo-21050507/free-photo-of-a-woman-with-an-umbrella-and-a-black-bag.jpeg",
  "https://images.pexels.com/photos/26312401/pexels-photo-26312401/free-photo-of-city.jpeg",
  "https://images.pexels.com/photos/25753767/pexels-photo-25753767/free-photo-of-sunset.jpeg",
  "https://images.pexels.com/photos/25740950/pexels-photo-25740950/free-photo-of-an-old-fashioned-telephone-with-cherries-on-top.jpeg",
];

const mockImages = images.map((imgUrl, i) => ({
  id: i + 1,
  url: imgUrl,
}));

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className=" columns-4">
        {mockImages.map((image) => (
          <div key={image.id} className="my-5 w-48">
            <img src={image.url} alt="" />
          </div>
        ))}
      </div>
    </main>
  );
}
