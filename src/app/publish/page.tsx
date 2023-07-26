"use client";
import React, { useEffect, useRef, useState } from "react";
import {useTranslation} from "react-i18next";
import {Tabs, TabsProps} from "antd";
import UploadVideo from '../components/uploadVideo/UploadVideo'
import UploadImg from '../components/uploadImg/UploadImg'
import '../style/Publish.css'

export default function Page() {

    const { t } = useTranslation();

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: t('uploadVideo'),
            children: <UploadVideo></UploadVideo>,//用户列表
        },
        {
            key: '2',
            label: t('uploadImg'),
            children: <UploadImg></UploadImg>,//帖子列表
        },
    ];

    return (
        <div>
            <div className="min-w-[1024px] max-w-[1220px] min-h-[600px] mx-[auto] bg-white overflow-y-scroll rounded-xl p-[15px]">
                <Tabs
                    defaultActiveKey="1"
                    size='middle'
                    items={items}
                />
            </div>
        </div>
    );
}
