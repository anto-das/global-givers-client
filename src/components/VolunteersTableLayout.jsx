
import { Link } from 'react-router-dom';

const VolunteersTableLayout = ({volunteer}) => {
    return (
          <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={volunteer.thumbnail}
                  alt={volunteer.postTitle} />
              </div>
            </div>
            <div>
              <div className="font-bold">{volunteer.postTitle}</div>
              <div className="text-sm opacity-50">{volunteer.location}</div>
            </div>
          </div>
        </td>
        <td>
            {volunteer.description.substring(0,20)}...
            <br />
          <span className="badge badge-ghost badge-sm">{volunteer.deadline}</span>
        </td>
        <td className={`capitalize lg:text-lg ${volunteer.category === 'health care' && 'text-blue-400 '}
    ${volunteer.category === 'education' && 'text-amber-500 '}
    ${volunteer.category === 'social service' && 'text-green-400'}
    ${volunteer.category === 'animal welfare' && 'text-pink-500'}`}>{volunteer.category}</td>
        <th>
          <Link to={`/volunteers/${volunteer._id}`}><button className="btn btn-ghost btn-xs">details</button></Link>
        </th>
      </tr>
    );
};

export default VolunteersTableLayout;