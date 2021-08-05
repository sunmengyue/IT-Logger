import React, { useState, useEffect } from 'react';
import LogItem from './LogItem';

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const getLogs = async () => {
    setLoading(true);
    const res = await fetch('/logs');
    const data = await res.json();
    setLogs(data);
    setLoading(false);
  };

  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return <h4>Loading...</h4>;
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center"> System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p>No logs to show...</p>
      ) : (
        logs.map(({ id, message, attention, tech, date }) => (
          <li className="collection-item" key={id}>
            <LogItem
              message={message}
              attention={attention}
              tech={tech}
              date={date}
            />
          </li>
        ))
      )}
    </ul>
  );
};

export default Logs;
