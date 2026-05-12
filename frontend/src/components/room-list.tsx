

import { RoomData } from '../mockdata/room-data'
import Room from './room'
import '../styles/room.css'

interface RoomFilter {
    mode: string;
}

export default function RoomList({ mode }: RoomFilter) {

    const filterData = RoomData.filter(data => 
        mode=='joined-rooms' && data.joined 
        || mode==='available-rooms' && data.is_public && !data.joined)
    const numRoom = filterData.length

    return (
        <>
            { numRoom > 0 ?
                <div className='room-collection'>
                    {filterData.map(data => (
                        <Room
                            id={data.id}
                            room_name={data.room_name}
                            section={data.section}
                            description={data.description}
                            num_people={data.num_people}
                            created_at={data.created_at}
                            manager_id={data.manager_id}
                            joined={data.joined}
                            is_public={data.is_public}
                            mode={mode}
                        />
                    ))}
                </div>
                : 
                <div className='empty-room'>
                    { mode === 'joined-rooms' ? 
                        `No rooms joined. Try joining or create rooms.`
                        :
                        `No available rooms. Try joining or create rooms.`
                    } 
                </div>
            }
        </>
    )
}