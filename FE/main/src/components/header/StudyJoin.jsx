import React from "react";
import { useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import thumbnail1 from "./../../imgs/thumbnail/thumbnail1.jpg";
import "./ToggleButton.css";

function StudyJoin() {
  const [commentText, setCommentText] = useState("");
  const [commentTextLength, setCommentTextLength] = useState(0);
  const [studyopen, setstudyOpen] = useState(false);
  const CameraIcon = ({ handleImageUpload }) => (
    <AiOutlineCamera
      className="w-8 h-8  cursor-pointer"
      onClick={handleImageUpload}
    />
  );

  const handleCommentTextChange = (e) => {
    const newText = e.target.value;
    setCommentText(newText);
    setCommentTextLength(newText.length);
  };

  return (
    <div>
      <div className="text-center" style={{ width: "700px", height: "700px" }}>
        <div className="mx-auto my-4 w-full">
          <div className="flex justify-center font-kr font-semibold text-3xl ">
            스터디 만들기
          </div>
          <form>
            <label class="flex flex-row">
              <span class=" flex justify-start w-32 text-sm font-medium text-slate-700 mt-4">
                스터디 이름
                <img
                  className="ml-1 w-4 h-4"
                  src="https://gooroomee.com/ref/project/bunny-201902/images/icon/ico_reddot.svg"
                />
              </span>

              <input
                type="text"
                placeholder="스터디 이름을 입력하세요."
                className="ml-6 mt-4 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
              />
            </label>
          </form>
          <form>
            <label class="flex flex-row">
              <span class=" flex justify-start w-32 text-sm font-medium text-slate-700 mt-4">
                해시 태그
              </span>

              <input
                type="text"
                placeholder="스터디를 대표하는 키워드를 입력하세요. (최대 3개)"
                className="ml-6 mt-4 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
              />
            </label>
          </form>
          <form>
            <label class="flex flex-row mt-4">
              <span class=" flex justify-start w-32 text-sm font-medium text-slate-700 ">
                대표 이미지
              </span>

              <div className="flex flex-row-reverse">
                <div className="">
                  <input
                    type="file"
                    accept="image/*"
                    id="file-input"
                    style={{ display: "none" }} // input을 숨김
                  />
                  <label className="">
                    <div className="flex flex-row absolute mt-32">
                      <CameraIcon
                        handleImageUpload={() =>
                          document.getElementById("file-input").click()
                        }
                      />
                      <span className="font-normal font-kr text-lg text-black/60 ">
                        편집
                      </span>
                    </div>
                  </label>
                </div>
                <img
                  src={thumbnail1}
                  className="w-64 h-40 mx-auto bg-white  rounded-md object-cover"
                />
              </div>
            </label>
          </form>

          <form>
            <div class="flex flex-row">
              <span class=" flex justify-start w-32 text-sm font-medium text-slate-700 mt-4">
                초기 장치 설정
              </span>
              <label
                for="toogleButton"
                class="flex items-center cursor-pointer mt-4"
              >
                <div class="px-2">카메라</div>

                <div class="relative">
                  <input id="toogleButton" type="checkbox" class="hidden" />

                  <div class="toggle-path bg-gray-200 w-9 h-5 rounded-full shadow-inner"></div>

                  <div class="toggle-circle absolute w-3.5 h-3.5 bg-white rounded-full shadow inset-y-0 left-0"></div>
                </div>
              </label>
              <label
                for="toogleButton1"
                class="flex items-center cursor-pointer mt-4 ml-12"
              >
                <div class="px-2">마이크</div>

                <div class="relative">
                  <input id="toogleButton1" type="checkbox" class="hidden" />

                  <div class="toggle-path1 bg-gray-200 w-9 h-5 rounded-full shadow-inner"></div>

                  <div class="toggle-circle1 absolute w-3.5 h-3.5 bg-white rounded-full shadow inset-y-0 left-0"></div>
                </div>
              </label>
            </div>
          </form>

          <form>
            <label class="flex flex-row relative">
              <span class=" flex justify-start w-32 text-sm font-medium text-slate-700 mt-4">
                스터디 에티켓
              </span>

              <textarea
                autocomplete="off"
                value={commentText}
                onChange={handleCommentTextChange}
                maxlength="1000"
                placeholder="스터디 규칙, 공지 사항 등을 입력해주세요."
                className="ml-6 mt-4 block w-full h-40 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
              <div className="absolute left-32 -bottom-6 ">
                ({commentTextLength}/1000)
              </div>
            </label>
          </form>

          <div class="formGroup mt-10 rounded-xl flex justify-center items-center bg-[#fff5ec] w-full py-4">
            <label class="detailInfo ">
              
              <p class="detailInfoText text-sm text-[#ff7f00]">
                설정한 내용은 스터디를 만든 후 변경이 가능합니다. 단, 스터디
                공개 여부는변경이 불가능합니다.
              </p>
            </label>
          </div>

          <button
            className="btn btn-light h-12 w-full bg-teal-600 font-medium text-white mt-6 rounded-xl"
            onClick={() => {
              window.open("/dashBoard", "_blank");
              setstudyOpen(false);
            }}
          >
            스터디 룸 만들기
          </button>

          {/* <div class="formGroup withValidateTx">
            <label class="formLabel input-field-label">
              스터디 이름
              <img src="https://gooroomee.com/ref/project/bunny-201902/images/icon/ico_reddot.svg" />
            </label>
            <div class="formContent">
              <input
                name="title"
                type="text"
                placeholder="스터디 이름을 입력하세요"
                title="스터디 이름을 입력하세요"
                autocomplete="off"
                maxlength="30"
                class="form-control input-md rounded"
                aria-required="true"
                aria-invalid="false"
              />
            </div>
          </div>
          <div class="formGroup withValidateTx">
            <label class="formLabel">스터디 URL</label>
            <div class="formContent">
              <div class="url-area clearfix">
                <input
                  name="urlId"
                  type="text"
                  title="URL을 입력하세요"
                  autocomplete="off"
                  maxlength="30"
                  disabled="disabled"
                  class="form-control input-md url-input-field rounded"
                  aria-required="true"
                  aria-invalid="false"
                />
                <div class="describe-tx">
                  *URL은 스터디를 만든 후 변경이 불가능합니다.
                </div>
              </div>
            </div>
          </div>
          <div class="formGroup">
            <label class="formLabel input-field-label">해시태그</label>
            <div class="formContent">
              <div class="hashTag createTopInputField">
                <div data-v-61d92e31="" class="vue-tags-input">
                  <div data-v-61d92e31="" class="ti-input">
                    <ul data-v-61d92e31="" class="ti-tags">
                      <li data-v-61d92e31="" class="ti-new-tag-input-wrapper">
                        <input
                          data-v-61d92e31=""
                          placeholder="스터디를 대표하는 키워드를 입력하세요. (최대 3개)"
                          maxlength="15"
                          type="text"
                          size="1"
                          class="ti-new-tag-input ti-valid"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="formGroup">
            <label class="formLabel">대표 이미지</label>
            <div class="formContent">
              <div class="create-room-img-area">
                <img
                  src="ref/project/bunny-201902/images/roomImg_003.jpg"
                  alt="방 대표 이미지"
                />{" "}
                <div class="imgEditBtnRec" />
                <button type="button" class="imgEditBtn">
                  편집
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="formGroup">
          <label for="open" class="formLabel input">
            게스트 입장
            <span class="position-relative badgeRec">
              <button class="badge badge-round"></button>
            </span>
          </label>
          <div class="formContent clearfix">
            <label class="formContentLabel half clearfix">
              <input type="radio" class="checkbox" value="true" />
              <span class="formContentLabelTx">가능</span>
            </label>
            <label class="formContentLabel half clearfix">
              <input type="radio" class="checkbox" value="false" />
              <span class="formContentLabelTx">불가능</span>
            </label>
          </div> */}

          {/* <h3 className="text-lg font-black text-gray-800">
        혜택
      </h3>
      <p className="text-sm text-gray-500">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde velit nisi magnam similique aperiam numquam ipsam. Magni quidem illum voluptate alias! Consequuntur iusto id debitis deserunt iste reiciendis autem odio.
      </p>
    </div>
    <div className="flex gap-4 ">
      <button
        className="btn btn-light w-full border-t  bg-teal-600 text-white "
        onClick={() => {window.open("/dashBoard", "_blank");
        setstudyOpen(false);}}
      >
        스터디 룸 만들기
      </button> */}
        </div>
      </div>
    </div>
  );
}

export default StudyJoin;
