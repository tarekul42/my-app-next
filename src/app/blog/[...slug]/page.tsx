const CatchAllRoutesPage = async ({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) => {
  const { slug } = await params;
  return (
    <div>
      <h1>This is CatchcAll Routes Page component: {slug} </h1>
    </div>
  );
};

export default CatchAllRoutesPage;
