export function roadmapPathToID(filePath: string): string {
  const fileName = filePath.split('/').pop() || ""
  return fileName
}

export async function getRoadmapIds(ruta: string | undefined, specialtyId:string | undefined) {
  const roadmapFiles = await import.meta.glob<any>(
    `/src/data/careers/${ruta}/${specialtyId}/*`,
    {
      eager: true,
    }
  )
  return Object.keys(roadmapFiles).map(roadmapPathToID)
}