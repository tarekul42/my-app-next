const DynamicBlogpage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  return (
    <div>
      <h1>This is Dynamic Blog page component: {blogId}</h1>
    </div>
  );
};

export default DynamicBlogpage;
