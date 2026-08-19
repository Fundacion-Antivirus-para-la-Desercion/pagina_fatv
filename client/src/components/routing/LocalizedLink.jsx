import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ROUTE_SLUGS } from "../../routes/routes.config";
import { useRoute } from "../../routes/useRoute";

/**
 * Reemplaza a `<Link to="/ruta-literal">`.
 *
 * Se enlaza por key lógica en vez de por path, así el slug correcto según el
 * idioma activo lo resuelve el router y no cada componente:
 *   <LocalizedLink routeKey="foundation">…</LocalizedLink>
 *   -> /es/fundacion  |  /en/foundation
 */
const LocalizedLink = ({ routeKey, children, ...linkProps }) => {
  const { to } = useRoute();

  return (
    <Link to={to(routeKey)} {...linkProps}>
      {children}
    </Link>
  );
};

LocalizedLink.propTypes = {
  routeKey: PropTypes.oneOf(Object.keys(ROUTE_SLUGS)).isRequired,
  children: PropTypes.node,
};

export default LocalizedLink;
