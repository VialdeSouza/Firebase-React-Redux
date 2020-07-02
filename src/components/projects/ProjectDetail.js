import React from 'react';

function ProjectDetails(props) {
    const id = props.match.params.id;
  return (
      <div className="container section project-details">
          <div className="card z-depth-0">
              <div className="card-content">
                  <span className="card-title">
                      Project Title {id}
                  </span>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus consequuntur libero nobis numquam tenetur eligendi nulla ab, architecto pariatur enim necessitatibus amet, aut possimus? Provident illo atque aliquam natus vero?</p>
              </div>
              <div className="card-action gret lighten-4 grey-text">
                  <div>Posted by Tammy =)</div>
                  <div>2nd September, 2am</div>
              </div>

          </div>
      </div>
  );
}

export default ProjectDetails;