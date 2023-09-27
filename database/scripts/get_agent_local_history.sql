SELECT *
FROM build_status
WHERE node_name LIKE '%@param1@%'
ORDER BY build_datetime DESC
LIMIT 25;