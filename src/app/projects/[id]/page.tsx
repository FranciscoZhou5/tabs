export default function ProjectById({ params }: { params: { id: string } }) {
  return (
    <div className="w-full flex justify-center py-4">
      <div> Projetos sobre {params.id} </div>
    </div>
  );
}
