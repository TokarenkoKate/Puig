export default async function BrandPage({
  params,
}: {
  params: Promise<{ brandName: string }>;
}) {
  const { brandName } = await params;

  return <div>{brandName}</div>;
}
