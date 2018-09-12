import React from 'react'
import ProjectItem from './ProjectItem'

const ProjectList = () => {


  const renderProject = () => {
  }

  return (
    <div>
      <h1> Projects </h1>
        <ul>
          <li onClick={() => {this.renderProject(feedBack)}}>feedBack</li>
          <li>ActiVision</li>
          <li>Network Analyzer</li>
        </ul>
    </div>
  )
}

export const ProjectList;
