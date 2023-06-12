import * as React from "react";

//component
import { Title, TextAreaMax } from '@/components';
//nds-ui
import { Tree, Button, Select, Checkbox, Avatar, TextField, Chip } from 'nds-ui/component';

const TreePage = () => {
  const [CommentExtend, setCommentExtend] = React.useState(true);
  const CommentExtendClick = () => {
    setCommentExtend(!CommentExtend)
  }
  const OpenIcon = () => {
    return (
      <div className="r3 otl-gray6 w16 h16 overHidden flexCenter"> <i className="i-minus w14 h14 bgc-gray6"/> </div>
      )
    }
    const CloseIcon = () => {
      return (
      <div className="r3 otl-gray6 w16 h16 overHidden flexCenter"> <i className="i-plus w14 h14 bgc-gray6"/> </div>
    )
  }
  return (
    <>
    <div className="contentWidth flex gap50 mt30">
      <div className="width40 flexColumn gap20">
        <div className="flexBetween h28">
          <p className="b size16"> Organization </p>
          <div className="flex gap10">
            <Button variant="contained" size='small' className='px20'>Button</Button>
            <Button variant="outlined" size='small' className='px20' theme="gray6">Button</Button>
          </div>
        </div>
        <div className="width100 vh100-262 otl-grayc scrollYAuto">
          <Tree title='넥스트리' icon={<i className='i-home bgc-gray6'/>} expanded>
            <Tree 
              title='프로젝트 그룹' 
              expanded
              icon
              openIcon={OpenIcon()}
              closeIcon={CloseIcon()}
            >
              <Tree 
                title='PM 팀' 
                icon
                openIcon={OpenIcon()}
                closeIcon={CloseIcon()}
              >
                
              </Tree>
              <Tree 
                title='컨설팅 팀' 
                expanded
                icon
                openIcon={OpenIcon()}
                closeIcon={CloseIcon()}
              >
                <Tree item title='홍길동' icon={<i className="i-file bgc-gray6 w14 h14"/>}/>
              </Tree>
            </Tree>
            <Tree 
              title='SW개발 그룹'
              expanded
              icon
              openIcon={OpenIcon()}
              closeIcon={CloseIcon()}
            >
              <Tree 
                title='Alpha 팀' 
                expanded
                icon
                openIcon={OpenIcon()}
                closeIcon={CloseIcon()}
              >
                <Tree item title='홍길동' icon={<i className="i-file bgc-gray6 w14 h14"/>}/>
                <Tree item title='홍길동' icon={<i className="i-file bgc-gray6 w14 h14"/>}/>
              </Tree>
              <Tree 
                title='Bravo 팀' 
                icon
                openIcon={OpenIcon()}
                closeIcon={CloseIcon()}
              >
                <Tree item title='홍길동' icon={<i className="i-file bgc-gray6 w14 h14"/>}/>
                <Tree item title='홍길동' icon={<i className="i-file bgc-gray6 w14 h14"/>}/>
              </Tree>
              <Tree 
                title='Chalie 팀' 
                icon
                openIcon={OpenIcon()}
                closeIcon={CloseIcon()}
              >
                <Tree item title='홍길동' icon={<i className="i-file bgc-gray6 w14 h14"/>}/>
                <Tree item title='홍길동' icon={<i className="i-file bgc-gray6 w14 h14"/>}/>
              </Tree>
              <Tree 
                title='Delta 팀' 
                icon
                openIcon={OpenIcon()}
                closeIcon={CloseIcon()}
              >
                <Tree item title='홍길동' icon={<i className="i-file bgc-gray6 w14 h14"/>}/>
                <Tree item title='홍길동' icon={<i className="i-file bgc-gray6 w14 h14"/>}/>
              </Tree>
              <Tree 
                title='Echo 팀' 
                icon
                openIcon={OpenIcon()}
                closeIcon={CloseIcon()}
              >
                <Tree item title='홍길동' icon={<i className="i-file bgc-gray6 w14 h14"/>}/>
                <Tree item title='홍길동' icon={<i className="i-file bgc-gray6 w14 h14"/>}/>
              </Tree>
              <Tree 
                title='Golf 팀' 
                icon
                openIcon={OpenIcon()}
                closeIcon={CloseIcon()}
              >
                <Tree item title='홍길동' icon={<i className="i-file bgc-gray6 w14 h14"/>}/>
                <Tree item title='홍길동' icon={<i className="i-file bgc-gray6 w14 h14"/>}/>
              </Tree>
              <Tree 
                title='Papa 팀' 
                icon
                openIcon={OpenIcon()}
                closeIcon={CloseIcon()}
              >
                <Tree item title='홍길동' icon={<i className="i-file bgc-gray6 w14 h14"/>}/>
                <Tree item title='홍길동' icon={<i className="i-file bgc-gray6 w14 h14"/>}/>
              </Tree>
            </Tree>
            <Tree 
              title='플랫폼 그룹'
              expanded
              icon
              openIcon={OpenIcon()}
              closeIcon={CloseIcon()}
            >
              <Tree 
                title='NARA 플랫폼팀' 
                icon
                openIcon={OpenIcon()}
                closeIcon={CloseIcon()}
              >
                <Tree item title='홍길동' icon={<i className="i-file bgc-gray6 w14 h14"/>}/>
                <Tree item title='홍길동' icon={<i className="i-file bgc-gray6 w14 h14"/>}/>
              </Tree>
              <Tree 
                title='나무소리 팀' 
                icon
                openIcon={OpenIcon()}
                closeIcon={CloseIcon()}
              >
                <Tree item title='홍길동' icon={<i className="i-file bgc-gray6 w14 h14"/>}/>
                <Tree item title='홍길동' icon={<i className="i-file bgc-gray6 w14 h14"/>}/>
              </Tree>
              <Tree 
                title='NARA 드라마팀(GDC)' 
                icon
                openIcon={OpenIcon()}
                closeIcon={CloseIcon()}
              >
                <Tree item title='홍길동' icon={<i className="i-file bgc-gray6 w14 h14"/>}/>
                <Tree item title='홍길동' icon={<i className="i-file bgc-gray6 w14 h14"/>}/>
              </Tree>
            </Tree>
            <Tree 
              title='경영지원 그룹'
              expanded
              icon
              openIcon={OpenIcon()}
              closeIcon={CloseIcon()}
            >
              <Tree 
                title='경영지원팀' 
                icon
                openIcon={OpenIcon()}
                closeIcon={CloseIcon()}
              >
                <Tree item title='홍길동' icon={<i className="i-file bgc-gray6 w14 h14"/>}/>
                <Tree item title='홍길동' icon={<i className="i-file bgc-gray6 w14 h14"/>}/>
              </Tree>
              <Tree 
                title='영업팀' 
                icon
                openIcon={OpenIcon()}
                closeIcon={CloseIcon()}
              >
                <Tree item title='홍길동' icon={<i className="i-file bgc-gray6 w14 h14"/>}/>
                <Tree item title='홍길동' icon={<i className="i-file bgc-gray6 w14 h14"/>}/>
              </Tree>
            </Tree>
            <Tree item title='Boot Camp' icon={<i className="i-folder bgc-gray6"/>}>

            </Tree>
            <Tree item title='미지정' icon={<i className="i-folder bgc-gray6"/>}>

            </Tree>
          </Tree>
        </div>
      </div>
      <div className="width95 flexColumn gap20 mb125">
        <div className="flexBetween h28">
          <p className="b size16"> Result </p>
          <div className="flex gap10">
            <Button variant="contained" size='small' className='px20'>Button</Button>
            <Button variant="outlined" size='small' className='px20' theme="gray6">Button</Button>
          </div>
        </div>
        <div className="flexColumn gap20 alignCenter">
          <div className="width100 p30 flexColumn gap30 otlt-grayc otlb-grayc">
            <div className="flex gap30 alignCenter">
              <Avatar className='w100 h100 size50' color='primary_light' name='nextree' />
              <div className="flexColumn gap10">
                <div className="flexColumn gap3">
                  <p className="size12 txt-gray9">name</p>
                  <p className="size20 b">Nextree</p>
                </div>
                <p className="size14 txt-gray9">Admin : Lorem Ipsum</p>
              </div>
            </div>
            <div className="width100 h1 bgc-grayc"/>
            <div className="flexColumn gap20">
              <p className="b size14">Basic</p>
              <div className="flexColumn gap10">
                <div className="flex gap10 alignCenter">
                  <p className="w120 size14 txt-gray6">Email</p>
                  <TextField className='w300' defaultValue='Email@mail.com'/>
                </div>
                <div className="flex gap10 alignCenter">
                  <p className="w120 size14 txt-gray6">Phone</p>
                  <TextField className='w300' defaultValue='010-0000-0000'/>
                </div>
                <div className="flex gap10 alignCenter">
                  <p className="w120 size14 txt-gray6">Position</p>
                  <TextField className='w300' defaultValue='Team Manager'/>
                </div>
              </div>
            </div>
            <div className="flexColumn gap20">
              <p className="b size14">Detail</p>
              <div className="flexColumn gap10">
                <div className="flex gap10 alignCenter">
                  <p className="w120 size14 txt-gray6">Skills</p>
                  <div className="flex gap10">
                    <Chip label='React' className='px15'/>
                    <Chip label='JavaScript' className='px15'/>
                    <Chip label='Photoshop' className='px15'/>
                  </div>
                </div>
                <div className="flex gap10 ">
                  <p className="w120 size14 h34 flex alignCenter txt-gray6">About me</p>
                  <TextAreaMax className='h120'
                    defaultValue="Lorem Ipsum is simpl  printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release o"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap10">
            <Button size='large' className='w120' variant="outlined" theme="gray6">Save</Button>
            <Button size='large' className='w120' variant="contained">Message</Button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}


export default TreePage;