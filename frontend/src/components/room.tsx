import { EllipsisVertical } from "lucide-react";

export interface RoomData {
  id: number;
  room_name: string;
  section: string;
  description: string;
  num_people: number;
  created_at: Date;
  manager_id: number;
  joined: boolean;
  is_public: boolean;
}

interface RoomProps extends RoomData {
    mode: string;
}

export default function Room({
    id,
    room_name,
    section,
    description,
    num_people,
    created_at,
    manager_id,
    joined, /* to be deleted during phase 2*/
    is_public,
    mode,
  }: RoomProps,
) {
  return (
    <div className={joined ? 'room-join' : 'room-avail'}>
      <div className="room-header">
        <div className="header-arch">
          <div className="room-name">{room_name}</div>
          <div className="room-section">{section}</div>
        </div>
      </div>
      <div className="room-body">
        <div className="room-description">
            {description}
        </div>
        <div className="room-bottom">
          <div className="room-info">
            <div> Room ID: {id} </div>
            <div> {num_people} people </div>
            <div> Manager: {manager_id} </div>
          </div>
          <div className="room-right">
            {joined ? 
                <EllipsisVertical className='ellipsis' size={30} />
                :
                <button className='join-btn'>
                    Join
                </button>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
