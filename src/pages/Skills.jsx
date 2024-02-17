import React from 'react'
import MainLayout from '../layout/MainLayout'
import Weapons from '../components/Weapons'


function Skills(){
  return (
    <>
        <MainLayout>
            <div className="pt-10">
                <div className="bg-white/50">
                    <Weapons/>
                </div>
            </div>
        </MainLayout>
    </>
  )
}

export default Skills