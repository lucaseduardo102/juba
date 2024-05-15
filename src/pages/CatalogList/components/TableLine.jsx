export function TableLine({ first, second, third }) {
    return (
      <tr>
        <th className="col-6">{first}</th>
        <th className="col-4 text-center">{second}</th>
        <th className="col-2 text-center">{third}</th>
      </tr>
    );
  }
  