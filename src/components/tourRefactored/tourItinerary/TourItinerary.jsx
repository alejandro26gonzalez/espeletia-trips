import { useEffect, useState } from "react";
import { FiCheck, FiMapPin, FiCheckCircle } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { tourConfig } from "../../../config/pages/allTours/allTours";

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

    const {t} = useTranslation("tour");

    return (

        <Section>
            <Content>
                <Timeline>
                    <h2>{t(tourConfig.toursDetailPlainConfig.itinerary.titleKey)}</h2>
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
                                        {t(item.activityKey)}
                                    </TimelineDescription>
                                </TimelineContent>
                            </TimelineItem>
                        ))
                    }
                </Timeline>

                <Sidebar>
                    <EquipmentCard>
                        <EquipmentTitle>
                            {t(tourConfig.toursDetailPlainConfig.itinerary.titleRightKey)}
                        </EquipmentTitle>

                        <EquipmentList>
                            {
                                equipment?.map((group,index)=>(
                                    <div key={index}>
                                        <h4>{t(group.titleKey)}</h4>
                                        <EquipmentList>
                                            {
                                                group.itemsKey.map((item, i) => (
                                                    <EquipmentItem key={i}>
                                                        <EquipmentIcon>
                                                            <FiCheck />
                                                        </EquipmentIcon>
                                                        {t(item)}
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
                                    {t(tips[currentTip].titleKey)}
                                </TipTitle>

                                <TipDescription>
                                    {t(tips[currentTip].descriptionKey)}
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