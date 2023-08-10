export function roadmapPathToID(filePath: string): string {
  const fileName = filePath.split('/').pop() || ""
  const nameRoute = fileName.split(".")[0] || ""
  return nameRoute
}

export async function getRoadmapCareers() {
  const roadmapFiles = await import.meta.glob<any>(
    `/src/data/careers/*/*.md`,
    {
      eager: true,
    }
  )
  return Object.keys(roadmapFiles).map(roadmapPathToID)
}


export async function getRoadmapEspeciality() {
  const roadmapFiles = await import.meta.glob<any>(
    `/src/data/careers/*/*/*.md`,
    {
      eager: true,
    }
  )
  return Object.keys(roadmapFiles).map(roadmapPathToID)
}