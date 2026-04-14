import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Helper to get the path to the data file
const getDataFilePath = () => {
  return path.join(process.cwd(), 'data', 'projects.json');
};

export async function GET() {
  try {
    const filePath = getDataFilePath();
    if (!fs.existsSync(filePath)) {
      return NextResponse.json([]);
    }
    const fileData = fs.readFileSync(filePath, 'utf8');
    const projects = JSON.parse(fileData);
    return NextResponse.json(projects);
  } catch (error) {
    console.error("Error reading projects:", error);
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const newProject = await request.json();
    const filePath = getDataFilePath();
    
    let projects = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf8');
      projects = JSON.parse(fileData);
    }
    
    // Add unique ID format
    const projectWithId = {
      id: Date.now().toString(),
      ...newProject
    };
    
    projects.push(projectWithId);
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(projects, null, 2), 'utf8');
    
    return NextResponse.json(projectWithId, { status: 201 });
  } catch (error) {
    console.error("Error saving project:", error);
    return NextResponse.json({ error: "Failed to save project" }, { status: 500 });
  }
}
