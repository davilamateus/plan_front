import React, { useEffect, useRef, useState } from 'react'

import { RadioBrowserApi } from 'radio-browser-api'
import useGetAvatar from '../../../store/hooks/avatar/useGetAvatar'
import './style.scss'
import Skeleton from 'react-loading-skeleton'
const RadioComponent = () => {


    const api = new RadioBrowserApi('My Radio App')

    const UseGetAvatar = useGetAvatar();
    const [listRadio, setListRadio] = useState<any[]>([])
    const [page, setPage] = useState(0)
    const [radioStatus, setRadioStatus] = useState('play')
    const audioRef = useRef<any>()
    const [volume, setVolume] = useState('50')
    const [audioKey, setAudioKey] = useState(0);


    useEffect(() => {
        if (UseGetAvatar.country_code) {
            stations()
        }
    }, [UseGetAvatar])


    async function stations() {
        await api.searchStations({
            countryCode: UseGetAvatar.country_code,
            limit: 30,
            offset: 0
        }).then((result: any) => {
            console.log('radio', result)
            result.map((item: any) => {
                if (item.favicon !== '') {
                    setListRadio(oldArray => [...oldArray, item])
                }
            })
        }).catch((error: any) => {
            console.log('Radio Erro ', error)

        })

    }




    function backRadioChange(value: number) {
        if (page - 1 === -1) {
            setPage(listRadio.length - 1)
        } else {
            setPage(page + (value))
            setAudioKey(audioKey - 1);
            audioRef.current.play()
            playStatus('pause')
            setTimeout(() => {
                playStatus('play')

            }, 1);

        }

    }
    function nextRadioChange(value: number) {
        if (page + 1 === listRadio.length) {
            setPage(0);
        } else {
            setPage(page + (value));
        }
        setAudioKey(audioKey + 1);
        audioRef.current.play()
        playStatus('pause')
        setTimeout(() => {
            playStatus('play')

        }, 1);

    }

    function playStatus(value: string) {
        if (value == 'play') {
            setRadioStatus('pause')
            audioRef.current.play()
        } else {
            setRadioStatus('play')
            audioRef.current.pause()

        }
    }



    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = Number(volume) / 100
        }
    }, [volume])




    return (
        <div className='radio box '>
            {listRadio.length > 0 ?
                <>
                    <img className='radio-img' src={listRadio[page].favicon} alt="" />
                    <div className="radio-controls">
                        <div className="radio-title">
                            <span>You are listening to</span>
                            <h5>{listRadio[page].name}</h5>
                        </div>
                        <div className="radios-btns-controler">

                            <div className="radios-bts">
                                <svg onClick={() => { backRadioChange(-1) }} xmlns="http://www.w3.org/2000/svg" width="15.552" height="12.387" viewBox="0 0 15.552 12.387">
                                    <g id="vuesax_outline_next" data-name="vuesax/outline/next" transform="translate(0 0)">
                                        <g id="next" transform="translate(0 0)">
                                            <path id="Vector" d="M6.645,8.356a2.041,2.041,0,0,0,.946-.232,1.656,1.656,0,0,0,.946-1.476V1.708A1.672,1.672,0,0,0,7.591.232,2.043,2.043,0,0,0,5.7.232L.946,2.7A1.672,1.672,0,0,0,0,4.175,1.672,1.672,0,0,0,.946,5.651L5.7,8.118A1.986,1.986,0,0,0,6.645,8.356Zm0-7.577A1.129,1.129,0,0,1,7.161.9a.915.915,0,0,1,.516.805V6.648a.915.915,0,0,1-.516.805,1.121,1.121,0,0,1-1.032,0L1.376,4.986a.886.886,0,0,1,0-1.61L6.129.908A1.135,1.135,0,0,1,6.645.779Z" transform="translate(5.289 2.013)" fill="#292d32" />
                                            <path id="Vector-2" data-name="Vector" d="M.43,7.153a.413.413,0,0,0,.43-.387V.387A.413.413,0,0,0,.43,0,.413.413,0,0,0,0,.387V6.766A.41.41,0,0,0,.43,7.153Z" transform="translate(1.726 2.617)" fill="#292d32" />
                                            <path id="Vector-3" data-name="Vector" d="M0,12.387H15.552V0H0Z" transform="translate(0 0)" fill="none" opacity="0" />
                                        </g>
                                    </g>
                                </svg>
                                {radioStatus !== 'play' ?
                                    <svg onClick={() => { playStatus('pause') }} xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53">
                                        <defs>
                                            <filter id="Retângulo_501" x="0" y="0" width="53" height="53" filterUnits="userSpaceOnUse">
                                                <feGaussianBlur stdDeviation="3" result="blur" />
                                                <feFlood flood-color="#6cd9aa" flood-opacity="0.271" />
                                                <feComposite operator="in" in2="blur" />
                                                <feComposite in="SourceGraphic" />
                                            </filter>
                                        </defs>
                                        <g id="Grupo_3946" data-name="Grupo 3946" transform="translate(-17.108 6)">
                                            <g transform="matrix(1, 0, 0, 1, 17.11, -6)" filter="url(#Retângulo_501)">
                                                <rect id="Retângulo_501-2" data-name="Retângulo 501" width="35" height="35" rx="8" transform="translate(9 6)" fill="#68d9a5" />
                                            </g>
                                            <g id="vuesax_outline_pause" data-name="vuesax/outline/pause" transform="translate(35.365 10.148)">
                                                <g id="pause">
                                                    <path id="Vector" d="M4.447,13.571H1.921C.626,13.571,0,12.973,0,11.734v-9.9C0,.6.626,0,1.921,0H4.447C5.742,0,6.368.6,6.368,1.837v9.9C6.368,12.973,5.742,13.571,4.447,13.571ZM1.921,1.044c-.752,0-.877.188-.877.793v9.9c0,.605.118.793.877.793H4.447c.752,0,.877-.188.877-.793v-9.9c0-.605-.118-.793-.877-.793Z" transform="translate(1.566 1.566)" fill="#292d32" />
                                                    <path id="Vector-2" data-name="Vector" d="M4.447,13.571H1.921C.626,13.571,0,12.973,0,11.734v-9.9C0,.6.626,0,1.921,0H4.447C5.742,0,6.368.6,6.368,1.837v9.9C6.368,12.973,5.742,13.571,4.447,13.571ZM1.921,1.044c-.752,0-.877.188-.877.793v9.9c0,.605.118.793.877.793H4.447c.752,0,.877-.188.877-.793v-9.9c0-.605-.118-.793-.877-.793Z" transform="translate(8.769 1.566)" fill="#292d32" />
                                                    <path id="Vector-3" data-name="Vector" d="M0,0H16.7V16.7H0Z" fill="none" opacity="0" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>

                                    :
                                    <svg onClick={() => { playStatus('play') }} xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53">
                                        <defs>
                                            <filter id="Retângulo_501" x="0" y="0" width="53" height="53" filterUnits="userSpaceOnUse">
                                                <feGaussianBlur stdDeviation="3" result="blur" />
                                                <feFlood flood-color="#6cd9aa" flood-opacity="0.271" />
                                                <feComposite operator="in" in2="blur" />
                                                <feComposite in="SourceGraphic" />
                                            </filter>
                                        </defs>
                                        <g id="Grupo_3945" data-name="Grupo 3945" transform="translate(-180 -24.74)">
                                            <g transform="matrix(1, 0, 0, 1, 180, 24.74)" filter="url(#Retângulo_501)">
                                                <rect id="Retângulo_501-2" data-name="Retângulo 501" width="35" height="35" rx="8" transform="translate(9 6)" fill="#68d9a5" />
                                            </g>
                                            <g id="vuesax_outline_play" data-name="vuesax/outline/play" transform="translate(195.662 36.025)">
                                                <g id="play" transform="translate(0 0)">
                                                    <path id="Vector" d="M4.64,18.632a4.393,4.393,0,0,1-2.21-.573C.864,17.156,0,15.318,0,12.9V5.735C0,3.3.864,1.477,2.431.573s3.586-.733,5.7.482l6.2,3.576c2.1,1.215,3.264,2.883,3.264,4.691s-1.155,3.475-3.264,4.691l-6.2,3.576A7.132,7.132,0,0,1,4.64,18.632ZM4.64,1.5a2.832,2.832,0,0,0-1.456.372c-1.085.623-1.677,2-1.677,3.867v7.152c0,1.868.593,3.234,1.677,3.867s2.571.452,4.188-.482l6.2-3.576c1.617-.934,2.511-2.129,2.511-3.385S15.187,6.86,13.57,5.926L7.373,2.35A5.639,5.639,0,0,0,4.64,1.5Z" transform="translate(3.264 2.742)" fill="#292d32" />
                                                    <path id="Vector-2" data-name="Vector" d="M0,0H24.106V24.106H0Z" fill="#fff" opacity="0" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                }

                                <svg onClick={() => { nextRadioChange(1) }} id="vuesax_outline_next" data-name="vuesax/outline/next" xmlns="http://www.w3.org/2000/svg" width="14" height="12.387" viewBox="0 0 14 12.387">
                                    <g id="next" transform="translate(0 0)">
                                        <path id="Vector" d="M1.7,8.356a1.692,1.692,0,0,1-.852-.232A1.678,1.678,0,0,1,0,6.648V1.708A1.7,1.7,0,0,1,.852.232a1.677,1.677,0,0,1,1.7,0L6.833,2.7a1.705,1.705,0,0,1,0,2.952L2.555,8.118A1.647,1.647,0,0,1,1.7,8.356ZM1.7.779a.928.928,0,0,0-.929.929V6.648a.929.929,0,0,0,1.393.805L6.446,4.986a.93.93,0,0,0,0-1.61L2.168.908A.941.941,0,0,0,1.7.779Z" transform="translate(1.553 2.013)" fill="#292d32" />
                                        <path id="Vector-2" data-name="Vector" d="M.387,7.153A.39.39,0,0,1,0,6.766V.387A.39.39,0,0,1,.387,0,.39.39,0,0,1,.774.387V6.766A.387.387,0,0,1,.387,7.153Z" transform="translate(11.672 2.617)" fill="#292d32" />
                                        <path id="Vector-3" data-name="Vector" d="M0,0H14V12.387H0Z" transform="translate(14 12.387) rotate(180)" fill="none" opacity="0" />
                                    </g>
                                </svg>

                            </div>
                            <div className="radio-volume">
                                <audio key={audioKey} ref={audioRef} autoPlay={false}>
                                    <source src={listRadio[page].url} />
                                </audio>
                                <div className='radio-volume-bg'>
                                    <div style={{ width: volume + '%' }} className="radio-volume-bar"></div>
                                    <input className='radio-volume' type="range" min="1" max="100" onChange={(e) => { setVolume(e.target.value) }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                :
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <div>
                        <Skeleton style={{ width: '64px', height: '64px', }} />

                    </div>
                    <div>
                        <Skeleton style={{ width: '94px', height: '10px', }} />
                        <Skeleton style={{ width: '134px', height: '16px', }} />

                    </div>
                    <div>
                        <Skeleton style={{ width: '124px', height: '54px', }} />

                    </div>
                </div>

            }
        </div>
    )
}


export default RadioComponent