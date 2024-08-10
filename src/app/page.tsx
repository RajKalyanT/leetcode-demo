import React from "react";

import { useState, useEffect } from 'react';
import supabase from '@/utils/supabaseClient'

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('weekly_contest_409')
        .select('*');
      
      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setData(data);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from Supabase</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.}</li>
        ))}
      </ul>
    </div>
  );
}