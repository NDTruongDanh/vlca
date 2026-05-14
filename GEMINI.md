@AGENTS.md

# Project Rules
@docs\project-structure.md

# Critical Routing Requirement
The expected route MUST follow actual roads and streets.
The implementation MUST NOT draw a simple straight line between start and destination coordinates.

# Required Routing Source
The expected route polyline MUST come from the OSRM routing API response.
Use:
`https://router.project-osrm.org/route/v1/driving/{startLng},{startLat};{endLng},{endLat}?overview=full&geometries=geojson`

# Expected Response Parsing
The API response contains: `data.routes[0].geometry.coordinates`
These coordinates already contain the full road-following route geometry.
Do NOT replace them with:
- only start/end points
- interpolated straight lines
- manually generated segments

# Coordinate Conversion Requirement
OSRM returns coordinates in `[lng, lat]`. Leaflet requires `[lat, lng]`.
The implementation MUST convert coordinates correctly before rendering.

# Polyline Rendering Requirement
The expected route polyline MUST use the converted OSRM geometry directly.

# Validation Requirement
The implementation is only considered correct if:
- the route visibly follows roads
- turns/intersections are visible
- the route bends naturally with streets
- the polyline is not a direct diagonal line
Testing should be done using two points in Hanoi with obvious road curvature.
