const WebLinksContent = ({ links }) => {
  // Group by category
  const groupedData = links.reduce((acc, item) => {
    const { category } = item;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  // console.log(groupedData);

  const sortedGroupedData = Object.keys(groupedData)
    .sort() // default alphabetical order
    .reduce((acc, key) => {
      acc[key] = groupedData[key];
      return acc;
    }, {});
  // console.log(sortedGroupedData);
  return (
    <>
      <section className=" border mt-2 ">
        {Object.entries(sortedGroupedData).map(([category, items]) => (
          <div key={category} id={category} className="card border-dark">
            <div className="card-header">{category}</div>
            <div className="card-body">
              {items.map((item) => (
                <a
                  key={item.id}
                  className="text-decoration-none d-inline-flex p-2 border mt-2 ms-2"
                  href={item.link}
                  title={item.name}
                  target="_blank"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
export default WebLinksContent;
