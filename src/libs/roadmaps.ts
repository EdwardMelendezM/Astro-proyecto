export function roadmapPathToID(filePath: string): string {
  const fileName = filePath.split('/').pop() || ""
  return fileName
}

export async function getRoadmapIds() {
  const roadmapFiles = await import.meta.glob<any>(
    "/src/data/careers/*/*/*",
    {
      eager: true,
    }
  )
  console.log({ roadmapFiles })
  return Object.keys(roadmapFiles).map(roadmapPathToID)
}