import { useEffect, useState } from "react";
import { FiCheck, FiMapPin, FiCheckCircle } from "react-icons/fi";

import {
    Section,
    Content,
    Timeline,
    TimelineItem,
    TimelineIcon,
    TimelineContent,
    TimelineTime,
    TimelineTitle,
    TimelineDescription,
    Sidebar,
    EquipmentCard,
    EquipmentTitle,
    EquipmentList,
    EquipmentItem,
    EquipmentIcon,
    TipsCard,
    TipIcon,
    TipTitle,
    TipDescription
} from "./TourItinerary.styles";

const TourItinerary = ({
    itinerary,
    equipment,
    tips
}) => {

    const [currentTip, setCurrentTip] = useState(0);

    useEffect(() => {
        if (!tips?.length) return;
        const interval = setInterval(() => {
            setCurrentTip((prev) =>
                prev === tips.length - 1
                    ? 0
                    : prev + 1
            );
        }, 5000);
        return () => clearInterval(interval);
    }, [tips]);

    return (

        <Section>
            <Content>
                <Timeline>
                    <h2>Itinerario</h2>
                    {
                        itinerary?.map((item, index) => (
                            <TimelineItem key={index}>
                                <TimelineIcon>
                                    <FiMapPin />
                                </TimelineIcon>

                                <TimelineContent>
                                    <TimelineTime>
                                        {item.time}
                                    </TimelineTime>

                                    <TimelineDescription>
                                        {item.activity}
                                    </TimelineDescription>
                                </TimelineContent>
                            </TimelineItem>
                        ))
                    }
                </Timeline>

                <Sidebar>
                    <EquipmentCard>
                        <EquipmentTitle>
                            ¿Qué llevar?
                        </EquipmentTitle>

                        <EquipmentList>
                            {
                                equipment?.map((group,index)=>(
                                    <div key={index}>
                                        <h4>{group.title}</h4>
                                        <EquipmentList>
                                            {
                                                group.items.map((item, i) => (
                                                    <EquipmentItem key={i}>
                                                        <EquipmentIcon>
                                                            <FiCheck />
                                                        </EquipmentIcon>
                                                        {item}
                                                    </EquipmentItem>
                                                ))
                                            }
                                        </EquipmentList>
                                    </div>
                                ))
                            }
                        </EquipmentList>
                    </EquipmentCard>
                    {
                        tips?.length > 0 && (
                            <TipsCard key={currentTip}>
                                <TipIcon>
                                    <FiCheckCircle />
                                </TipIcon>

                                <TipTitle>
                                    {tips[currentTip].title}
                                </TipTitle>

                                <TipDescription>
                                    {tips[currentTip].description}
                                </TipDescription>
                            </TipsCard>
                        )
                    }
                </Sidebar>
            </Content>
        </Section>
    );
};

export default TourItinerary;