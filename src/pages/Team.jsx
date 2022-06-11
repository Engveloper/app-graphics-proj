import { useEffect, useState } from "react";

export function Team() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const result = fetch("https://randomuser.me/api/?results=8");
    result.then((response) => {
      response.json().then(({ results }) => {
        setMembers(results);
      });
    });
  }, []);

  return (
    <div>
      <h4 className="mb-8">Nuestro equipo</h4>
      <div className="row">
        {members.map((member, index) => (
          <div
            key={`${member.name.first}-${index}`}
            className="col s12 m3 mb-16"
          >
            <img src={member.picture.large} />
            <p className="text-bold">
              {member.name.first} {member.name.last}
            </p>
            <p>{member.email}</p>
            <span></span>
          </div>
        ))}
      </div>
    </div>
  );
}
