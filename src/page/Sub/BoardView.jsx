import * as React from "react";

//component
import { Title, TextAreaMax } from '@/components';
//nds-ui
import { Slide, Button, Tab, Location, Select, TextField, Checkbox, Table, Pagination, TextArea } from 'nds-ui/component';

const BoardView = () => {
  const [CommentExtend, setCommentExtend] = React.useState(true);
  const CommentExtendClick = () => {
    setCommentExtend(!CommentExtend)
  }
  return (
    <>
    <div className="contentWidth flexColumn mt30 mb175">
      <Title title='Title'/>
      <div className="flexColumn gap30 mt50">
        <div className="flexColumn otlb-gray9 otlt-gray9">
          <div className="flex alignCenter h70 otlb-grayc size14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
          <p className="size14 txt-gray6 alignCenter h34 mt10">2023. 01. 18</p>
          <div className="size14 txt-gray6 lh150 mt30 pb50 otlb-grayc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br/> <br/>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </div>
          <div className="h50 flex alignCenter px10 size14 txt-gray6 otlb-grayc">Attachment</div>
          <div className="h50 flex alignCenter px10 gap20 otlb-grayc-dashed">
            <div className='flex alignCenter gap10'>
              <i className="i-attachment bgc-gray9 w16 h16" />
              <div className="h14 w1 bgc-gray9"/>
              <p className="size14 txt-gray9">File.img</p>
            </div>
            <Button className='minw20 maxw20 h20' square variant='contained' theme='graye' otl='grayc-100'>
              <p className='i-download bgc-gray9 w16 h16' />
            </Button>
          </div>
          <div className="h50 flex alignCenter px10 gap20">
            <div className='flex alignCenter gap10'>
              <i className="i-attachment bgc-gray9 w16 h16" />
              <div className="h14 w1 bgc-gray9"/>
              <p className="size14 txt-gray9">File.doc</p>
            </div>
            <Button className='minw20 maxw20 h20' square variant='contained' theme='graye' otl='grayc-100'>
              <p className='i-download bgc-gray9 w16 h16' />
            </Button>
          </div>
        </div>
        <div className="p20 bgc-graye flex gap10 h160">
          <TextAreaMax />
          <Button className='height100' theme='gray6-100' variant="contained">Comment</Button>
        </div>
        <div className="flexColumn gap10">
          <div className="flex alignCenter justifyEnd px20 size14 txt-gray6 gap10">
            Sort :
            <Select
              className='w200'
              defaultValue={1}
              list={['All', 'Like']}
            />
          </div>
          <div className="px20 pb20 otlt-grayc flexColumn">
            <div className="flexColumn otlb-grayc-dashed gap20 py20">
              <div className="flexColumn gap10">
                <div className="flexBetween alignCenter">
                  <div className="flex alignCenter gap20">
                    <p className="size14">Lorem</p>
                    <div className="flex alignCenter size12 txt-gray6 b gap5">
                      <Checkbox className='like2' defaultChecked/>
                      12
                    </div>
                    <p className="size12 txt-gray9">2023. 06. 07</p>
                  </div>
                  <div className="flex gap10">
                    <Button className='px20' size='small' variant='outlined' theme='gray6'>
                      Delete
                    </Button>
                    <Button className='px20' size='small' variant='outlined' theme='gray6'>
                      Modify
                    </Button>
                    <Button className='px20' size='small' variant='outlined' theme='gray6'>
                      Reply
                    </Button>
                  </div>
                </div>
                <p className="size14 txt-gray6 lh150">
                  Lorem Ipsum is simpl  printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy <br/>
                  text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release o
                </p>
              </div>
              <div className="flex alignCenter gap5">
                <p className="size12 txt-gray6"> Reply <b>2</b></p>
                <Button onClick={CommentExtendClick} className='minw20 maxw20 h20' square variant='contained' theme='graye' otl='grayc-100'>
                  <p className={`bgc-gray9 ${CommentExtend ? 'i-left' : 'i-right'}`} style={{transform: 'rotate(90deg)'}}/>
                </Button>
              </div>
            </div>

            {
              CommentExtend ?
              <>
              <div className="pl30 pt15 pb20 flex gap15 otlb-grayc-dashed">
                <i className="i-comment-extend bgc-gray9"/>
                <div className="flexColumn width100 gap10">
                  <div className="flexBetween alignCenter">
                    <div className="flex alignCenter gap20">
                      <p className="size14">Lorem</p>
                      <div className="flex alignCenter size12 txt-gray6 b gap5">
                        <Checkbox className='like2'/>
                        0
                      </div>
                      <p className="size12 txt-gray9">2023. 06. 07</p>
                    </div>
                    <div className="flex gap10">
                      <Button className='px20' size='small' variant='outlined' theme='gray6'>
                        Delete
                      </Button>
                      <Button className='px20' size='small' variant='outlined' theme='gray6'>
                        Modify
                      </Button>
                    </div>
                  </div>
                  <p className="size14 txt-gray6 lh150">
                    1500s, when an unknown printer took a galley of
                  </p>
                </div>
              </div>

              <div className="pl30 pt15 pb20 flex gap15 otlb-grayc-dashed">
                <i className="i-comment-extend bgc-gray9"/>
                <div className="flexColumn width100 gap10">
                  <div className="flexBetween alignCenter">
                    <div className="flex alignCenter gap20">
                      <p className="size14">Lorem</p>
                      <div className="flex alignCenter size12 txt-gray6 b gap5">
                        <Checkbox className='like2'/>
                        0
                      </div>
                      <p className="size12 txt-gray9">2023. 06. 07</p>
                    </div>
                    <div className="flex gap10">
                    </div>
                  </div>
                  <p className="size14 txt-gray6 lh150">
                    to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release o
                  </p>
                </div>
              </div>
              </>
              :
              <></>
            }

            <div className="flexColumn otlb-grayc-dashed gap20 py20">
              <div className="flexColumn gap10">
                <div className="flexBetween alignCenter">
                  <div className="flex alignCenter gap20">
                    <p className="size14">Lorem</p>
                    <div className="flex alignCenter size12 txt-gray6 b gap5">
                      <Checkbox className='like2' defaultChecked/>
                      12
                    </div>
                    <p className="size12 txt-gray9">2023. 06. 07</p>
                  </div>
                  <div className="flex gap10">
                    <Button className='px20' size='small' variant='contained' theme='gray6'>
                      Cancel
                    </Button>
                  </div>
                </div>
                <p className="size14 txt-gray6 lh150">
                  Lorem!
                </p>
              </div>
              <div className="flex alignCenter gap5">
                <p className="size12 txt-gray6"> Reply <b>0</b></p>
                <Button className='minw20 maxw20 h20' square variant='contained' theme='graye' otl='grayc-100'>
                  <p className={`bgc-gray9 i-right`} style={{transform: 'rotate(90deg)'}}/>
                </Button>
              </div>
            </div>
            
            <div className="pl30 pt15 pb20 flex gap15 otlb-grayc-dashed">
              <i className="i-comment-extend bgc-gray9"/>
              <div className="flex gap10 h120 width100">
                <TextAreaMax />
                <Button className='height100' theme='gray6-100' variant="contained">Comment</Button>
              </div>
            </div>

          </div>
        </div>

        <div className="flex justifyEnd">
          <Button size="large" theme="gray6" variant="outlined" className='gap10'>
            <i className='i-left-arrow'/>
            BACK
          </Button>
        </div>
      </div>
     
      
      
    </div>
    </>
  )
}


export default BoardView;