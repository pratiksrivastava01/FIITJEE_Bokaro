import Image from "next/image";
import Link from "next/link";
import React from "react";
import language from "@/assets/language.png";
import time from "@/assets/time.png";
import location from "@/assets/location.png";

import littlegine from "@/assets/course/7.png";
import point from "@/assets/point.png";
import steps from "@/assets/steps.png";
import book from "@/assets/book.png";
import material from "@/assets/material.png";
import homework from "@/assets/homework.png";
import exam from "@/assets/exam.png";
import practice from "@/assets/practice.png";
import performance from "@/assets/performance.png";
import learining from "@/assets/learining.png";
import quiz from "@/assets/quiz.png";
import competition from "@/assets/competition.png";
import assesment from "@/assets/assesment.png";
import twentyfour from "@/assets/24.png";
import nurturing from "@/assets/nurturing.png";
import goal from "@/assets/goal.png";
import test from "@/assets/test.png";
import opentest from "@/assets/open_test.png";
import gmp from "@/assets/gmp.png";

import Contact from "@/components/Contact";

export const metadata = {
  title: "FIITJEE Bokaro || Little Genie",

  description: "Generated by create next app",
};

const page = () => {
  return (
    <>
      <div className="bg-[#F7F8FC]">
        <div className="course ">
          <div className="">
            <div className="flex gap-3 p-2 flex-wrap sm:gap-0">
              <Link href="/">Home </Link>
              <span> / </span>
              <Link href="/course"> Class 10 Offline Course </Link>
              <span> / </span>
              <Link href="/course/Ascent-10"> Ascent-10</Link>
            </div>
            <div className="flex flex-col justify-between  p-2">
              <h1 className="text-5xl font-bold sm:text-3xl ml-10 sm:ml-0 mt-5 sm:mt-0">
                Ascent
              </h1>
              <div className="flex sm:flex-wrap">
                <div className=" w-[60%] sm:w-[100%]">
                  <p className="ml-10 sm:ml-0  mt-5   ">
                    Our one-year classroom program is designed specifically for
                    Class IX students who will be transitioning to Class X in
                    2023. This comprehensive program aims to equip students with
                    the necessary skills and knowledge to excel not only in
                    school board examinations but also in a range of
                    national-level scholastic and competitive exams. By
                    enrolling in this program, students will receive focused
                    instruction and guidance to prepare for exams such as the
                    National Talent Search Exam (NTSE),
                    <span className="sm:hidden">
                      {" "}
                      National Standard Examination in Junior Science (NSEJS) or
                      International Junior Science Olympiad (IJSO), and Regional
                      Mathematics Olympiad (RMO). The program covers a wide
                      range of subjects, provides thorough exam preparation, and
                      nurtures critical thinking and problem-solving abilities.
                      With our expert educators and a supportive learning
                      environment.
                    </span>
                  </p>
                  <div className="flex flex-wrap gap-5">
                    <div className="flex ml-10 sm:ml-0  items-center gap-5 sm:gap-3 mt-3">
                      <Image
                        src={language}
                        alt="lang"
                        className="h-[2rem] w-[2rem]"
                      />{" "}
                      <span className="flex justify-center">
                        Hindi / English
                      </span>
                    </div>
                    <div className="flex ml-10 sm:ml-0  items-center sm:gap-3 gap-5 mt-3">
                      <Image
                        src={time}
                        alt="lang"
                        className="h-[2rem] w-[2rem]"
                      />{" "}
                      <span className="flex justify-center">300 hrs </span>
                    </div>
                  </div>
                  <div className="flex ml-10 sm:ml-0  items-center gap-5 sm:gap-3 mt-3">
                    <Image
                      src={location}
                      alt="lang"
                      className="h-[2rem] w-[2rem]"
                    />{" "}
                    <span className="flex justify-center">Offline Bokaro</span>
                  </div>
                </div>
                <div className=" w-[30%] ml-10 sm:ml-0 sm:mt-10 rounded-lg bg-primary-light  bg-opacity-40 sm:opacity-100  shadow-2xl text-primary sm:w-[100%] p-4 sm:p-2">
                  <Image
                    src={littlegine}
                    alt="littlegine"
                    className="rounded-lg"
                  />
                  <h1 className="mt-4 font-bold text-3xl sm:text-xl">
                    This Course Includes
                  </h1>
                  <ul>
                    <li className="mt-2 flex gap-5">
                      {" "}
                      <Image
                        src={point}
                        alt="point"
                        className="h-[2rem] w-[2rem]"
                      />
                      <span className="font-bold">
                        Four-phase course coverage.
                      </span>
                    </li>
                    <li className="mt-2 flex gap-5">
                      {" "}
                      <Image
                        src={point}
                        alt="point"
                        className="h-[2rem] w-[2rem]"
                      />
                      <span className="font-bold">
                        300 + hours of classroom teaching.
                      </span>
                    </li>
                    <li className="mt-2 flex gap-5">
                      {" "}
                      <Image
                        src={point}
                        alt="point"
                        className="h-[2rem] w-[2rem]"
                      />
                      <span className="font-bold">
                        Extensive coverage of additional topics for JEE Main &
                        Advanced.
                      </span>
                    </li>
                    <li className="mt-2 flex gap-5">
                      {" "}
                      <Image
                        src={point}
                        alt="point"
                        className="h-[2rem] w-[2rem]"
                      />
                      <span className="font-bold">
                        Periodic tests on the latest JEE pattern
                      </span>
                    </li>
                    <li className="mt-2 flex gap-5">
                      {" "}
                      <Image
                        src={point}
                        alt="point"
                        className="h-[2rem] w-[2rem]"
                      />
                      <span className="font-bold">
                        Single comprehensive study material (by Megacosm
                        Cognitions).
                      </span>
                    </li>
                    <li className="mt-2 flex gap-5">
                      {" "}
                      <Image
                        src={point}
                        alt="point"
                        className="h-[2rem] w-[2rem]"
                      />
                      <span className="font-bold">
                        Chapter Practice Problems (CPP) for strong concept
                        knowledge.
                      </span>
                    </li>
                    <li className="mt-2 flex gap-5">
                      {" "}
                      <Image
                        src={point}
                        alt="point"
                        className="h-[2rem] w-[2rem]"
                      />
                      <span className="font-bold">
                        Common Phase Tests and exam practice.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-[#F7F8FC]  mt-10 sm:mt-[43rem] ml-10 sm:ml-0 p-4 ">
          <h1 className="font-bold text-3xl sm:text-xl">
            PROGRAM <span className="text-red"> FOCUS & OBJECTIVE :</span>
          </h1>
          <ul className="p-4 flex sm:flex-wrap flex-col w-[60%] sm:w-[100%] overflow-auto gap-5">
            <li className="mt-2 flex gap-5 items-center bg-primary-light shadow-lg rounded-lg p-4">
              <p className="flex gap-5 font-bold">
                <Image
                  src={goal}
                  alt="success"
                  className="h-[3rem] w-[3rem] "
                />
                The Long Term Goal of this Program is to help each & every
                Student get a Top Rank in JEE. Moreover, equal emphasis is given
                on attaining maximum score in Boards as well as excellent
                performance in various other Engineering Entrance Exams. As NTSE
                is a major milestone in Class X, Students are meticulously
                prepared for delivering a remarkable performance in this Exam.
                These Four years of intensive IIT-JEE training will help
                Students to gain an edge over the competition.
              </p>
            </li>
          </ul>
          <h1 className="font-bold text-3xl mt-10 p-4 sm:mt-5 sm:text-xl">
            Course <span className="text-red">Structure :</span>
          </h1>
          <ul className="p-4 ">
            <li className="mt-2 flex gap-5 items-center bg-primary-light shadow-lg rounded-lg p-4">
              {" "}
              <div className=" flex gap-5">
                <Image src={steps} alt="steps" className="h-[3rem] w-[3rem] " />{" "}
                {/* <p> */}
                <p>
                  Entire course will be covered in
                  <span className="font-bold">4 phases</span>.
                </p>
              </div>
            </li>
            <li className="mt-2 flex gap-5 items-center bg-primary-light shadow-lg rounded-lg p-4">
              {" "}
              <Image
                src={book}
                alt="steps"
                className="h-[3rem] w-[3rem] "
              />{" "}
              <p>
                <span className="font-bold">
                  {" "}
                  Extensive coverage of additional topics for JEE Main &
                  Advanced..
                </span>
              </p>
            </li>
            <li className="mt-2 flex gap-5 items-center bg-primary-light shadow-lg rounded-lg p-4">
              {" "}
              <div className="flex gap-5">
                <Image src={book} alt="steps" className="h-[3rem] w-[3rem] " />{" "}
                <p>
                  <span className="font-bold">Subjects covered: </span>In class
                  IX & X Physics, Chemistry, Mathematics, Biology, Social
                  Studies & Mental Ability will be covered for NTSE level while
                  focus for JEE Main & Advanced continues and in class XI & XII
                  Physics, Chemistry & Mathematics will be covered.
                </p>
              </div>
            </li>
            <li className="mt-2 flex gap-5 items-center bg-primary-light shadow-lg rounded-lg p-4">
              {" "}
              <p className=" flex gap-5">
                <Image
                  src={material}
                  alt="steps"
                  className="h-[3rem] w-[3rem] "
                />{" "}
                Single comprehensive study material (by Megacosm Cognitions):
                Additional problems will be supplemented wherever necessary
                students should not require any additional books etc.
              </p>
            </li>
            <li className="mt-2 flex gap-5 items-center bg-primary-light shadow-lg rounded-lg p-4">
              {" "}
              <Image
                src={homework}
                alt="steps"
                className="h-[3rem] w-[3rem] "
              />{" "}
              <p>Work Books for Home Assignment.</p>
            </li>

            <li className="mt-2 flex gap-5 items-center bg-primary-light shadow-lg rounded-lg p-4">
              {" "}
              <div className=" flex gap-5">
                <Image
                  src={assesment}
                  alt="steps"
                  className="h-[3rem] w-[3rem] "
                />{" "}
                <p>
                  <span className="font-bold">
                    Mock Board Test Series, Mock NTSE Test series across the
                    country for all FIITJEE students.
                  </span>
                </p>
              </div>
            </li>
            <li className="mt-2 flex gap-5 items-center bg-primary-light shadow-lg rounded-lg p-4">
              {" "}
              <div className=" flex gap-5">
                <Image
                  src={twentyfour}
                  alt="steps"
                  className="h-[3rem] w-[3rem] "
                />{" "}
                <p>
                  <span className="font-bold">
                    24/7 accessible Online Test Series for JEE Advanced with
                    deep analytics & insights
                  </span>
                </p>
              </div>
            </li>
            <li className="mt-2 flex gap-5 items-center bg-primary-light shadow-lg rounded-lg p-4">
              {" "}
              <div className=" flex gap-5">
                <Image
                  src={practice}
                  alt="steps"
                  className="h-[3rem] w-[3rem] "
                />{" "}
                <p>
                  <span className="font-bold text-xl sm:text-lg">
                    Chapter Practice Problems (CPP):
                  </span>{" "}
                  On each chapter Students will be given Chapter Practice
                  Problems which they have to attempt and submit before the
                  beginning of the next chapter. These solutions will be checked
                  by the faculty and will be returned to the Students with
                  remarks and suggestions. Thus helping every Student to have a
                  very strong command over fundamental concept knowledge very
                  crucial for getting Top ranks.
                </p>
              </div>
            </li>
            <li className="mt-2 flex gap-5 items-center bg-primary-light shadow-lg rounded-lg p-4">
              {" "}
              <div className=" flex gap-5">
                <Image
                  src={learining}
                  alt="steps"
                  className="h-[3rem] w-[3rem] "
                />{" "}
                <p>
                  <span className="font-bold text-xl sm:text-lg">
                    Class Learning Improvement Program (CLIP):
                  </span>{" "}
                  Icing on the cake of every class will be done through Class
                  Learning Improvement Program for those who have completed all
                  assignments to further help them get a{" "}
                  <span className="font-bold">
                    {" "}
                    higher Rank /performance in JEE Main & Advanced and Board
                    Exams but for all Other Engineering Entrance Exams, Jr.
                    Science Olympiad in class IX & various Talent Search Exam
                    conducted by State Government like JSTSE (Delhi) /
                    SSTSE(Rajasthan) / MSCE (Maharashtra) in class IX , NTSE in
                    class X & Sr. Science Olympiads in class XI and XII.
                  </span>
                </p>
              </div>
            </li>
            <li className="mt-2 flex gap-5 items-center bg-primary-light shadow-lg rounded-lg p-4">
              {" "}
              <div className=" flex gap-5">
                <Image
                  src={performance}
                  alt="steps"
                  className="h-[3rem] w-[3rem] "
                />{" "}
                <p>
                  <span className="font-bold text-xl sm:text-lg">
                    Success Potential Index (SPI):
                  </span>{" "}
                  We are the only institute in India having the capability to
                  predict Success Potential Index (SPI) of a student. We
                  constantly encourage our students to emulate their Success
                  Potential Index (SPI)
                </p>
              </div>
            </li>

            <li className="mt-2 flex gap-5 items-center bg-primary-light shadow-lg rounded-lg p-4">
              {" "}
              <div className=" flex gap-5">
                <Image
                  src={opentest}
                  alt="steps"
                  className="h-[3rem] w-[3rem] "
                />{" "}
                <p>
                  <span className="font-bold">
                    All India Open Test Series for Target NTSE -{" "}
                  </span>
                  You can check your current level of preparedness for
                  Competitive exams and compete with Top students currently
                  studying in class X through this Open Test Series, at the
                  National Level which will also check the Fundamentals
                  Preparation for IIT-JEE on the topics of class IX / X.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>{" "}
      <Contact />
    </>
  );
};

export default page;